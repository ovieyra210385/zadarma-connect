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

// Lógica de bot protegida (solo usuarios autenticados pueden usar el bot)
serve(async (req) => {
  const user = await getUserFromRequest(req)
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 })
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 })
  }
  const { message } = await req.json()
  if (!message) {
    return new Response(JSON.stringify({ error: 'Mensaje requerido' }), { status: 400 })
  }
  // Aquí iría la lógica de respuesta automática
  let reply = 'No entendí tu mensaje.'
  if (message?.toLowerCase().includes('hola')) reply = '¡Hola! ¿En qué puedo ayudarte?'
  // Puedes guardar la interacción si lo deseas
  // await supabase.from('conversations').insert([{ contact_id: ..., message }])
  return new Response(JSON.stringify({ reply }), { status: 200 })
})
