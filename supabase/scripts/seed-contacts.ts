// Script para poblar la tabla contacts con datos de ejemplo usando Supabase JS
// Ejecuta este archivo con Deno: deno run --allow-env --allow-net seed-contacts.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const supabase = createClient(supabaseUrl, supabaseKey)

const contactos = [
  { name: 'Juan Pérez', email: 'juan@example.com', phone: '555-1234' },
  { name: 'Ana López', email: 'ana@example.com', phone: '555-5678' },
  { name: 'Carlos Ruiz', email: 'carlos@example.com', phone: '555-8765' },
]

const main = async () => {
  for (const c of contactos) {
    const { data, error } = await supabase.from('contacts').insert([c])
    if (error) {
      console.error('Error insertando:', c, error.message)
    } else {
      console.log('Insertado:', data)
    }
  }
}

main()
