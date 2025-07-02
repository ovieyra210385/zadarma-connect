import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ZadarmaConfig {
  userKey: string
  userSecret: string
}

// Generate signature for Zadarma API
function generateSignature(method: string, params: Record<string, any>, secret: string): string {
  const sortedKeys = Object.keys(params).sort()
  const queryString = sortedKeys.map(key => `${key}=${params[key]}`).join('&')
  const stringToSign = method + queryString + secret
  
  // Simple MD5 implementation (for production, use crypto library)
  const encoder = new TextEncoder()
  const data = encoder.encode(stringToSign)
  return Array.from(new Uint8Array(data)).map(b => b.toString(16).padStart(2, '0')).join('')
}

// Make request to Zadarma API
async function zadarmaRequest(endpoint: string, params: Record<string, any> = {}, config: ZadarmaConfig) {
  const method = `/v1/${endpoint}/`
  const signature = generateSignature(method, params, config.userSecret)
  
  const url = new URL(`https://api.zadarma.com${method}`)
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `${config.userKey}:${signature}`,
      'Content-Type': 'application/json',
    }
  })
  
  return await response.json()
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { action, params = {} } = await req.json()
    
    // Get Zadarma credentials from secrets
    const userKey = Deno.env.get('ZADARMA_USER_KEY')
    const userSecret = Deno.env.get('ZADARMA_USER_SECRET')
    
    if (!userKey || !userSecret) {
      return new Response(
        JSON.stringify({ error: 'Zadarma credentials not configured' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const config: ZadarmaConfig = { userKey, userSecret }
    let result

    switch (action) {
      case 'getBalance':
        result = await zadarmaRequest('info/balance', {}, config)
        break
        
      case 'getNumbers':
        result = await zadarmaRequest('info/numbers', {}, config)
        break
        
      case 'buyNumber':
        result = await zadarmaRequest('request/number', params, config)
        break
        
      case 'getPbxStats':
        result = await zadarmaRequest('statistics/pbx', params, config)
        break
        
      case 'sendSms':
        result = await zadarmaRequest('sms/send', params, config)
        break
        
      case 'getCallHistory':
        result = await zadarmaRequest('statistics/pbx', params, config)
        break
        
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }

    return new Response(
      JSON.stringify(result),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Zadarma API error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})