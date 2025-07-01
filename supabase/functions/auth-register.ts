import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Configuración de Supabase
const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!)

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 })
  }

  const { email, password } = await req.json()
  if (!email || !password) {
    return new Response(JSON.stringify({ error: 'Faltan credenciales' }), { status: 400 })
  }

  // Registro de usuario
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 })
  }

  return new Response(JSON.stringify({ user: data.user }), { status: 200 })
})
