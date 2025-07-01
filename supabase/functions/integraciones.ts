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

// Integración protegida: solo usuarios autenticados pueden consumir APIs externas
serve(async (req) => {
  const user = await getUserFromRequest(req)
  if (!user) {
    return new Response(JSON.stringify({ error: 'No autorizado' }), { status: 401 })
  }
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 })
  }
  const { apiUrl, payload } = await req.json()
  if (!apiUrl) {
    return new Response(JSON.stringify({ error: 'apiUrl es requerido' }), { status: 400 })
  }
  // Aquí puedes hacer fetch a la API externa
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  const data = await response.json()
  return new Response(JSON.stringify({ external: data }), { status: 200 })
})
