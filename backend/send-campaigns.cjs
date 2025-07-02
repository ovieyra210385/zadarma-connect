// send-campaigns.js
const { createClient } = require('@supabase/supabase-js');
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const P = require('pino');

// Configuración de Supabase segura con dotenv
require('dotenv').config();
console.log('DEBUG SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('DEBUG SUPABASE_SERVICE_KEY:', process.env.SUPABASE_SERVICE_KEY);
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('Faltan variables de entorno SUPABASE_URL o SUPABASE_SERVICE_KEY');
}
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  // Autenticación de Baileys (genera carpeta 'auth_info')
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: 'silent' }),
  });

  sock.ev.on('creds.update', saveCreds);

  // Lee campañas pendientes
  const { data: campaigns, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('status', 'pendiente');

  if (error) {
    console.error('Error leyendo campañas:', error);
    process.exit(1);
  }

  for (const campaign of campaigns) {
    const recipients = campaign.recipients.split(',').map(r => r.trim());
    let allOk = true;
    for (const number of recipients) {
      try {
        await sock.sendMessage(number + '@s.whatsapp.net', { text: campaign.message });
        console.log(`Mensaje enviado a ${number}`);
      } catch (err) {
        allOk = false;
        console.error(`Error enviando a ${number}:`, err);
      }
    }
    // Actualiza el estado de la campaña
    await supabase
      .from('campaigns')
      .update({ status: allOk ? 'enviada' : 'error' })
      .eq('id', campaign.id);
  }

  process.exit(0);
}

main();