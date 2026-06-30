import { MetadataRoute } from 'next'

const baseUrl = 'https://tours.lasergame-evolution.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/laser-game', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/lancer-de-hache', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blind-test', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/tarifs', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/anniversaire', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/entreprises', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/modes-de-jeu', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/evenements', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/blog', priority: 0.5, changeFrequency: 'weekly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
