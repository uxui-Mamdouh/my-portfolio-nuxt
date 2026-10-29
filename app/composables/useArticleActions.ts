import { ref, onMounted, type Ref } from 'vue'

export const useArticleActions = (options: {
  showToast: (message: string, duration?: number) => void
  focusMode?: Ref<boolean>
  targetId?: string
}) => {
  const targetId = options.targetId || 'article-body'
  const copiedMd = ref(false)
  const copiedLink = ref(false)
  const speechPlaying = ref(false)
  const shortLink = ref('')

  // 1. DOM to Markdown Parser
  const buildMarkdown = () => {
    if (typeof document === 'undefined') return ''
    const article = document.getElementById(targetId)
    if (!article) return ''

    const clone = article.cloneNode(true) as HTMLElement
    clone.querySelectorAll('script, style, svg, button, .no-print, [data-no-export="true"], iframe').forEach(el => el.remove())

    // Expand hidden FAQ accordions for export
    clone.querySelectorAll('.grid.opacity-0').forEach(el => {
      el.classList.remove('opacity-0', 'grid-rows-[0fr]')
      el.classList.add('opacity-100', 'grid-rows-[1fr]', 'mb-6')
    })

    function parse(node: Node): string {
      let md = ''
      node.childNodes.forEach(child => {
        if (child.nodeType === 3) { // Text
          const text = child.textContent?.replace(/\s+/g, ' ') || ''
          if (text.trim()) md += text
          return
        }
        if (child.nodeType !== 1) return // Element

        const el = child as HTMLElement
        const tag = el.tagName.toLowerCase()
        
        if (tag === 'div' && el.classList.contains('hidden')) return

        if (tag === 'h1') md += `\n# ${el.innerText}\n\n`
        else if (tag === 'h2') md += `\n## ${el.innerText}\n\n`
        else if (tag === 'h3') md += `\n### ${el.innerText}\n\n`
        else if (tag === 'h4') md += `\n#### ${el.innerText}\n\n`
        else if (tag === 'p') md += `\n${parse(el)}\n\n`
        else if (tag === 'strong' || tag === 'b') md += `**${parse(el)}**`
        else if (tag === 'em' || tag === 'i') md += `*${parse(el)}*`
        else if (tag === 'code') md += `\`${el.innerText}\``
        else if (tag === 'pre') md += `\n\`\`\`\n${el.innerText}\n\`\`\`\n\n`
        else if (tag === 'a') {
          const href = el.getAttribute('href')
          if (href && !href.startsWith('#')) md += `[${el.innerText}](${href})`
          else md += el.innerText
        }
        else if (tag === 'img') {
          const src = el.getAttribute('src')
          const alt = el.getAttribute('alt') || ''
          if (src) md += `\n![${alt}](${src})\n`
        }
        else if (tag === 'li') md += `\n- ${parse(el).trim()}`
        else if (tag === 'ul' || tag === 'ol') md += `\n${parse(el)}\n`
        else if (tag === 'blockquote') md += `\n> ${parse(el).trim().replace(/\n/g, '\n> ')}\n\n`
        else if (tag === 'hr') md += `\n---\n\n`
        else if (tag === 'br') md += `\n`
        else md += parse(el)
      })
      return md
    }

    let result = parse(clone).replace(/\n{3,}/g, '\n\n').trim()
    result += '\n\n---\nOriginally published at ' + window.location.href
    return result
  }

  // 2. Copy as Markdown
  const copyAsMarkdown = async () => {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(buildMarkdown())
      copiedMd.value = true
      options.showToast('Full article copied as Markdown!')
      setTimeout(() => { copiedMd.value = false }, 2000)
    } catch (e) { options.showToast('Copy failed') }
  }

  // 3. Copy Link
  const copyShortLink = async () => {
    if (typeof window === 'undefined') return
    try {
      await navigator.clipboard.writeText(shortLink.value || window.location.href)
      copiedLink.value = true
      options.showToast('Link copied!')
      setTimeout(() => { copiedLink.value = false }, 2000)
    } catch (e) { options.showToast('Copy failed') }
  }

  // 4. Text-to-Speech (Reads actual article, skips code blocks)
  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      options.showToast('Browser doesn\'t support TTS')
      return
    }
    if (speechPlaying.value) {
      window.speechSynthesis.cancel()
      speechPlaying.value = false
      return
    }

    const article = document.getElementById(targetId)
    if (!article) return

    const clone = article.cloneNode(true) as HTMLElement
    clone.querySelectorAll('script, style, svg, button, .no-print, iframe, pre').forEach(el => el.remove())

    let plainText = clone.innerText || clone.textContent || ''
    plainText = plainText.replace(/\s+/g, ' ').trim()

    if (!plainText) return

    const utterance = new SpeechSynthesisUtterance(plainText)
    utterance.rate = 1.0
    utterance.lang = 'en-US'
    utterance.onend = () => { speechPlaying.value = false }
    window.speechSynthesis.speak(utterance)
    speechPlaying.value = true
    options.showToast('Reading aloud...')
  }

  // 5. Print
  const printArticle = () => {
    if (typeof window === 'undefined') return
    const wasFocusMode = options.focusMode?.value
    if (wasFocusMode && options.focusMode) options.focusMode.value = false
    
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.classList.add('aos-animate')
      el.setAttribute('style', 'opacity: 1 !important; transform: none !important; visibility: visible !important; transition: none !important;')
    })
    
    setTimeout(() => {
      window.print()
      if (wasFocusMode && options.focusMode) {
        setTimeout(() => { if(options.focusMode) options.focusMode.value = true }, 100)
      }
    }, 200)
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      shortLink.value = window.location.href
    }
  })

  return {
    copiedMd,
    copiedLink,
    speechPlaying,
    shortLink,
    copyAsMarkdown,
    copyShortLink,
    toggleSpeech,
    printArticle
  }
}