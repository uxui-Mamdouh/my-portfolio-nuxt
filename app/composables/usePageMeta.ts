// app/composables/usePageMeta.ts
import { useHead, useRoute } from '#imports'

interface ArticleMeta {
  publishedTime: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

interface FAQItem {
  question: string
  answer: string
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface PageMetaOptions {
  title: string
  description: string
  keywords?: string[]

  // URL
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'

  // Article-specific
  article?: ArticleMeta

  // Schema.org
  faqItems?: FAQItem[]
  breadcrumbs?: BreadcrumbItem[]

  // Misc
  bodyClass?: string
  noindex?: boolean
}

const SITE_URL = 'https://mamdouhghaneemy.com'
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`

export const usePageMeta = (options: PageMetaOptions) => {
  const route = useRoute()
  const fullUrl = `${SITE_URL}${options.canonical || route.path}`
  const ogImage = options.ogImage || DEFAULT_OG_IMAGE

  // ============ META TAGS ============
  const meta: any[] = [
    { name: 'description', content: options.description },
    { name: 'robots', content: options.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

    // Open Graph
    { property: 'og:title', content: options.title },
    { property: 'og:description', content: options.description },
    { property: 'og:url', content: fullUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:type', content: options.ogType || 'website' },
    { property: 'og:site_name', content: 'Mamdouh Ghaneemy' },
    { property: 'og:locale', content: 'en_US' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description },
    { name: 'twitter:image', content: ogImage },
    { name: 'twitter:creator', content: '@mamdouhghaneemy' },
  ]

  if (options.keywords?.length) {
    meta.push({ name: 'keywords', content: options.keywords.join(', ') })
  }

  if (options.article) {
    meta.push(
      { property: 'article:published_time', content: options.article.publishedTime },
      { property: 'article:author', content: 'Mamdouh Ghaneemy' },
      { property: 'article:section', content: options.article.section || 'Design' },
    )
    if (options.article.modifiedTime) {
      meta.push({ property: 'article:modified_time', content: options.article.modifiedTime })
    }
    options.article.tags?.forEach(tag => {
      meta.push({ property: 'article:tag', content: tag })
    })
  }

  // ============ SCHEMA.ORG GRAPH ============
  const schemaGraph: any[] = []

  // 1. Person (site-wide identity)
  schemaGraph.push({
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Mamdouh Ghaneemy',
    url: SITE_URL,
    jobTitle: 'Strategic Product Designer for Fintech & SaaS',
    description: 'I help founders turn complex products into clear, investor-ready experiences — with measurable outcomes.',
    image: `${SITE_URL}/images/mamdouh-ghaneemy-pic.png`,
    sameAs: [
      'https://linkedin.com/in/mamdouh-ghaneemy',
      'https://behance.net/ghaneemy',
    ],
    knowsAbout: [
      'Fintech UX',
      'SaaS Product Design',
      'Investor-Ready Interfaces',
      'Design Systems',
      'Nuxt 3 Development',
      'GA4 & Analytics Implementation',
      'WCAG 2.2 Accessibility',
    ],
    alumniOf: { '@type': 'Organization', name: 'Independent' },
  })

  // 2. WebSite (site-wide)
  schemaGraph.push({
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Mamdouh Ghaneemy — Strategic Product Designer',
    publisher: { '@id': `${SITE_URL}/#person` },
    inLanguage: 'en-US',
  })

  // 3. WebPage / BlogPosting
  if (options.article) {
    schemaGraph.push({
      '@type': 'BlogPosting',
      '@id': `${fullUrl}#article`,
      headline: options.title,
      description: options.description,
      url: fullUrl,
      image: ogImage,
      datePublished: options.article.publishedTime,
      dateModified: options.article.modifiedTime || options.article.publishedTime,
      author: { '@id': `${SITE_URL}/#person` },
      publisher: { '@id': `${SITE_URL}/#person` },
      mainEntityOfPage: { '@id': fullUrl },
      articleSection: options.article.section || 'Design',
      keywords: options.article.tags?.join(', '),
      inLanguage: 'en-US',
    })
  } else {
    schemaGraph.push({
      '@type': 'WebPage',
      '@id': `${fullUrl}#webpage`,
      url: fullUrl,
      name: options.title,
      description: options.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    })
  }

  // 4. Breadcrumbs
  if (options.breadcrumbs?.length) {
    schemaGraph.push({
      '@type': 'BreadcrumbList',
      itemListElement: options.breadcrumbs.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    })
  }

  // 5. FAQPage
  if (options.faqItems?.length) {
    schemaGraph.push({
      '@type': 'FAQPage',
      mainEntity: options.faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer.replace(/<[^>]*>/g, ''),
        },
      })),
    })
  }

  // ============ APPLY ============
  useHead({
    title: options.title,
    meta,
    link: [{ rel: 'canonical', href: fullUrl }],
    script: schemaGraph.length
      ? [{
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': schemaGraph,
          }),
        }]
      : [],
    bodyAttrs: {
      class: `min-h-screen ${options.bodyClass || ''}`.trim(),
    },
  })
}