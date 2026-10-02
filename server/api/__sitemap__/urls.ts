/**
 * Sitemap Dynamic URLs
 * =====================
 * بيجيب المقالات والمشاريع من Supabase
 */

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  // ─── Data Hygiene: لو مفيش credentials، ارجع فاضي ───
  if (!supabaseUrl || !supabaseKey) {
    console.warn('[Sitemap] Supabase credentials missing')
    return []
  }

  const urls: any[] = []

  try {
    // ═══ Fetch articles ═══
    const articlesRes = await $fetch<any[]>(
      `${supabaseUrl}/rest/v1/articles?select=slug,published_at,updated_at&is_published=eq.true`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
      }
    ).catch(err => {
      console.error('[Sitemap] Articles fetch failed:', err.message)
      return []
    })

    if (Array.isArray(articlesRes)) {
      articlesRes.forEach(article => {
        urls.push({
          loc: `/blog/${article.slug}`,
          lastmod: article.updated_at || article.published_at || new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.8,
        })
      })
    }

    // ═══ Fetch projects ═══
    const projectsRes = await $fetch<any[]>(
      `${supabaseUrl}/rest/v1/projects?select=slug,component_path,created_at,updated_at`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
        },
      }
    ).catch(err => {
      console.error('[Sitemap] Projects fetch failed:', err.message)
      return []
    })

    if (Array.isArray(projectsRes)) {
      projectsRes.forEach(project => {
        const path = project.component_path || `/projects/${project.slug}`
        urls.push({
          loc: path,
          lastmod: project.updated_at || project.created_at || new Date().toISOString(),
          changefreq: 'monthly',
          priority: 0.9,
        })
      })
    }

    console.log(`[Sitemap] Generated ${urls.length} dynamic URLs`)
    return urls

  } catch (error: any) {
    console.error('[Sitemap] Fatal error:', error.message)
    return []
  }
})