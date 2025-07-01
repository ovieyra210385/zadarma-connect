// Script para poblar la tabla analytics con datos de ejemplo usando Supabase JS
// Ejecuta este archivo con Deno: deno run --allow-env --allow-net seed-analytics.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseKey)

const eventos = [
  { event: 'login', meta: { device: 'mobile' } },
  { event: 'contact_created', meta: { source: 'web' } },
  { event: 'message_sent', meta: { channel: 'whatsapp' } },
]

// Obtén un usuario existente (opcional, para user_id)
const { data: users } = await supabase.auth.admin.listUsers({ perPage: 1 })
const user_id = users?.users?.[0]?.id || null

const main = async () => {
  for (const e of eventos) {
    const { data, error } = await supabase.from('analytics').insert([
      { event: e.event, user_id, meta: e.meta }
    ])
    if (error) {
      console.error('Error insertando evento:', error.message)
    } else {
      console.log('Evento insertado:', data)
    }
  }
}

main()
