/**
 * JS Error Detector
 * ==================
 * يلتقط أخطاء JavaScript غير المتوقعة
 */

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const reported = new Set<string>()

  const reportError = (data: {
    message: string
    source?: string
    lineno?: number
    colno?: number
    stack?: string
    type: 'error' | 'unhandledrejection'
  }) => {
    const key = `${data.message}|${data.source || ''}|${data.lineno || ''}`
    if (reported.has(key)) return
    reported.add(key)

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'js_error',
      error_message: (data.message || '').slice(0, 200),
      error_source: data.source || '',
      error_line: data.lineno || 0,
      error_col: data.colno || 0,
      error_type: data.type,
      page_path: window.location.pathname,
      page_url: window.location.href,
      timestamp: Date.now()
    })

    console.log('[JS_ERROR]', data.message)
  }

  // ─── window.onerror ───
  window.addEventListener('error', (e: ErrorEvent) => {
    reportError({
      message: e.message,
      source: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      stack: e.error?.stack,
      type: 'error'
    })
  })

  // ─── Unhandled promise rejections ───
  window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
    const reason = e.reason
    reportError({
      message: reason?.message || String(reason),
      stack: reason?.stack,
      type: 'unhandledrejection'
    })
  })

  console.log('[JS-ERROR] Detector loaded ✅')
})