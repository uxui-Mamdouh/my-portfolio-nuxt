export const useConsent = () => {
  const hasConsent = () => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('cookie_consent') === 'granted'
  }
  return { hasConsent }
}