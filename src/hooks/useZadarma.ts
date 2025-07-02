import { useState } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'

export interface ZadarmaNumber {
  number: string
  country: string
  status: string
  type: string
}

export interface ZadarmaBalance {
  balance: number
  currency: string
}

export interface CallRecord {
  id: string
  from: string
  to: string
  duration: number
  date: string
  status: string
}

export const useZadarma = () => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const callZadarmaAPI = async (action: string, params = {}) => {
    setLoading(true)
    try {
      const { data, error } = await supabase.functions.invoke('zadarma-api', {
        body: { action, params }
      })

      if (error) throw error
      return data
    } catch (error) {
      console.error('Zadarma API error:', error)
      toast({
        title: 'Error',
        description: 'Error al conectar con Zadarma API',
        variant: 'destructive'
      })
      return null
    } finally {
      setLoading(false)
    }
  }

  const getBalance = async (): Promise<ZadarmaBalance | null> => {
    return await callZadarmaAPI('getBalance')
  }

  const getNumbers = async (): Promise<ZadarmaNumber[] | null> => {
    const result = await callZadarmaAPI('getNumbers')
    return result?.numbers || null
  }

  const buyNumber = async (country: string, numberType: string) => {
    return await callZadarmaAPI('buyNumber', { country, type: numberType })
  }

  const sendSMS = async (number: string, text: string) => {
    return await callZadarmaAPI('sendSms', { number, text })
  }

  const getCallHistory = async (dateFrom?: string, dateTo?: string): Promise<CallRecord[] | null> => {
    const params: any = {}
    if (dateFrom) params.start = dateFrom
    if (dateTo) params.end = dateTo
    
    const result = await callZadarmaAPI('getCallHistory', params)
    return result?.records || null
  }

  const getPbxStats = async () => {
    return await callZadarmaAPI('getPbxStats')
  }

  return {
    loading,
    getBalance,
    getNumbers,
    buyNumber,
    sendSMS,
    getCallHistory,
    getPbxStats
  }
}