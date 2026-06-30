/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tours.lasergame-evolution.fr',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
}
