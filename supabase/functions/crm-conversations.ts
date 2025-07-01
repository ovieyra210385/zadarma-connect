import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!)

// Función para verificar JWT de Supabase
async function getUserFromRequest(req: Request) {
  const authHeader = req.headers.get('Authorization') || ''
  const token = authHeader.replace('Bearer ', '')
  if (!token) return null
  const { data, error } = await supabase.auth.getUser(token)
  if (error || !data.user) return null
  return data.user
}

serve(async (req) => {
  // Proteger todos los endpoints con JWT
  const user = await getUserFromRequest(req)
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 })
  }

  if (req.method === 'POST') {
    const { contact_id, message } = await req.json()
    if (!contact_id || !message) {
      return new Response(JSON.stringify({ error: 'Faltan datos obligatorios' }), { status: 400 })
    }
    // Validar que el contacto exista
    const { data: contact } = await supabase.from('contacts').select('id').eq('id', contact_id).maybeSingle()
    if (!contact) {
      return new Response(JSON.stringify({ error: 'Contacto no encontrado' }), { status: 404 })
    }
    const { data, error } = await supabase.from('conversations').insert([{ contact_id, message }]).select()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    return new Response(JSON.stringify({ conversation: data[0] }), { status: 201 })
  }
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('conversations').select('*')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    return new Response(JSON.stringify({ conversations: data }), { status: 200 })
  }
  return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 })
})
