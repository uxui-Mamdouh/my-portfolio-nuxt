// ═══════════════════════════════════════════════════════════════
// useMedia — Supabase queries for Media Library
// ═══════════════════════════════════════════════════════════════

// ✅ Import صريح — نفس نمط projects/index.vue
import { useSupabase } from '~/composables/utils/supabase'

export const useMedia = () => {
  const supabase = useSupabase()

  // ───────────────────────────────────────────────────────────
  // 1. Fetch all published series
  // ───────────────────────────────────────────────────────────
  const fetchSeries = async () => {
    const { data, error } = await supabase
      .from('media_series')
      .select('id, name, slug, description, cover_url, accent_color, icon, order_index')
      .eq('is_published', true)
      .order('order_index', { ascending: true })

    if (error) {
      console.error('Error fetching media series:', error)
      throw error
    }
    return data || []
  }

  // ───────────────────────────────────────────────────────────
  // 2. Fetch media items (with filters)
  // ───────────────────────────────────────────────────────────
  const fetchItems = async (options: {
    seriesSlug?: string
    mediaType?: string
    limit?: number
    featured?: boolean
  } = {}) => {
    let query = supabase
      .from('media_items')
      .select(`
        id, title, slug, description,
        media_type, is_featured,
        youtube_id, spotify_episode_id, dailymotion_id,
        video_url, audio_url, thumbnail_url, cover_url,
        duration_seconds,
        series_slug, episode_number, season_number,
        article_slug,
        is_published, published_at, order_index,
        tags, language
      `)
      .eq('is_published', true)
      .order('order_index', { ascending: true })
      .order('published_at', { ascending: false })

    if (options.seriesSlug) query = query.eq('series_slug', options.seriesSlug)
    if (options.mediaType) query = query.eq('media_type', options.mediaType)
    if (options.featured) query = query.eq('is_featured', true)
    if (options.limit) query = query.limit(options.limit)

    const { data, error } = await query
    if (error) {
      console.error('Error fetching media items:', error)
      throw error
    }
    return data || []
  }

  // ───────────────────────────────────────────────────────────
  // 3. Fetch all media attached to a specific article
  // ───────────────────────────────────────────────────────────
  const fetchByArticle = async (articleSlug: string) => {
    const { data, error } = await supabase
      .from('media_items')
      .select('*')
      .eq('article_slug', articleSlug)
      .eq('is_published', true)
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Error fetching article media:', error)
      throw error
    }
    return data || []
  }

  // ───────────────────────────────────────────────────────────
  // 4. Fetch a single media item by slug
  // ───────────────────────────────────────────────────────────
  const fetchBySlug = async (slug: string) => {
    const { data, error } = await supabase
      .from('media_items')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single()

    if (error) {
      console.error('Error fetching media item:', error)
      throw error
    }
    return data
  }

  return {
    fetchSeries,
    fetchItems,
    fetchByArticle,
    fetchBySlug,
  }
}