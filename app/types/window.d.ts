declare global {
  interface Window {
    dataLayer: any[]
    clarity?: (...args: any[]) => void
    __gtm_initialized__?: boolean
  }
}

export {}