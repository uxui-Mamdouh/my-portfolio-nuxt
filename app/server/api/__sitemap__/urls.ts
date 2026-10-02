/**
 * Sitemap Dynamic URLs
 * =====================
 * بيجيب المقالات والمشاريع من Supabase
 * عشان تتضاف تلقائياً في sitemap.xml
 */

import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl || process.env.SUPABASE_URL
  const supabaseKey = config.public.supabaseKey || process.env.SUPABASE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('[Sitemap] Supabase credentials missing')
    return []
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const urls: any[] = []

  try {
    // ═══ المقالات المنشورة ═══
    const { data: articles, error: articlesError } = await supabase
      .from('articles')
      .select('slug, published_at, updated_at, thumbnail_url')
      .eq('is_published', true)
      .order('published_at', { ascending: false })

    if (articlesError) {
      console.error('[Sitemap] Articles error:', articlesError)
    } else if (articles) {
      articles.forEach(article => {
        urls.push({
          loc: `/blog/${article.slug}`,
          lastmod: article.updated_at || article.published_at,
          changefreq: 'monthly',
          priority: 0.8,
          images: article.thumbnail_url ? [{ loc: article.thumbnail_url }] : undefined,
        })
      })
    }

    // ═══ المشاريع ═══
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('slug, component_path, created_at, updated_at, thumbnail_url')
      .order('order_index', { ascending: true })

    if (projectsError) {
      console.error('[Sitemap] Projects error:', projectsError)
    } else if (projects) {
      projects.forEach(project => {
        const path = project.component_path || `/projects/${project.slug}`
        urls.push({
          loc: path,
          lastmod: project.updated_at || project.created_at,
          changefreq: 'monthly',
          priority: 0.9,  // المشاريع أولوية أعلى
          images: project.thumbnail_url ? [{ loc: project.thumbnail_url }] : undefined,
        })
      })
    }

    console.log(`[Sitemap] Generated ${urls.length} dynamic URLs`)
    return urls

  } catch (error) {
    console.error('[Sitemap] Error:', error)
    return []
  }
})