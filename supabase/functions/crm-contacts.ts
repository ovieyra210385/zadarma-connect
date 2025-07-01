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
    const { name, email, phone } = await req.json()
    // Validaciones básicas
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Nombre y email son obligatorios' }), { status: 400 })
    }
    // Validar formato de email
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Email inválido' }), { status: 400 })
    }
    // Evitar duplicados
    const { data: existing } = await supabase.from('contacts').select('id').eq('email', email).maybeSingle()
    if (existing) {
      return new Response(JSON.stringify({ error: 'El email ya existe' }), { status: 409 })
    }
    const { data, error } = await supabase.from('contacts').insert([{ name, email, phone }]).select()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    return new Response(JSON.stringify({ contact: data[0] }), { status: 201 })
  }
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('contacts').select('*')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    return new Response(JSON.stringify({ contacts: data }), { status: 200 })
  }
  return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 })
})
