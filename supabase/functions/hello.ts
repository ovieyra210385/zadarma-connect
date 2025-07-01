import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

serve((_req) =>
  new Response(
    JSON.stringify({ status: 'ok', message: 'Función de ejemplo funcionando' }),
    { headers: { 'Content-Type': 'application/json' } }
  )
)
