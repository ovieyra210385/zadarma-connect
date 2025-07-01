// Script para poblar la tabla conversations con datos de ejemplo usando Supabase JS
// Ejecuta este archivo con Deno: deno run --allow-env --allow-net seed-conversations.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseKey)

// Obtén los contactos existentes
const { data: contacts, error } = await supabase.from('contacts').select('id')
if (error) {
  console.error('Error obteniendo contactos:', error.message)
  Deno.exit(1)
}

const mensajes = [
  'Hola, ¿cómo estás?',
  '¿Tienes alguna consulta?',
  'Gracias por tu interés.'
]

const main = async () => {
  for (const contact of contacts) {
    for (const msg of mensajes) {
      const { data, error } = await supabase.from('conversations').insert([
        { contact_id: contact.id, message: msg }
      ])
      if (error) {
        console.error('Error insertando conversación:', error.message)
      } else {
        console.log('Conversación insertada:', data)
      }
    }
  }
}

main()
