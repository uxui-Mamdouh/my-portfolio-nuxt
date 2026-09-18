import { createClient } from '@supabase/supabase-js'

let supabaseInstance = null

export const useSupabase = () => {
  if (!supabaseInstance) {
    const config = useRuntimeConfig()
    supabaseInstance = createClient(
      config.public.supabaseUrl,
      config.public.supabaseKey
    )
  }
  return supabaseInstance
}