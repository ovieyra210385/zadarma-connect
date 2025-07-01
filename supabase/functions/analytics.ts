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
    const { event, meta } = await req.json()
    if (!event) {
      return new Response(JSON.stringify({ error: 'El campo event es obligatorio' }), { status: 400 })
    }
    // Guardar el user_id del usuario autenticado
    const { data, error } = await supabase.from('analytics').insert([{ event, user_id: user.id, meta }]).select()
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    return new Response(JSON.stringify({ event: data[0] }), { status: 201 })
  }
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('analytics').select('*')
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400 })
    return new Response(JSON.stringify({ analytics: data }), { status: 200 })
  }
  return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 })
})
