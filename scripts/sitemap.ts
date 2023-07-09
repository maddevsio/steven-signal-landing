// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

interface URLInfo {
  url: string
  changefreq: string
  priority: number
}

const generateSitemap = (): void => {
  const hostname = 'https://stevensignal.ai'
  const urls: URLInfo[] = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/?lang=ru', changefreq: 'weekly', priority: 0.8 },
    { url: '/?lang=en', changefreq: 'weekly', priority: 0.8 },
  ]

  const sitemap = generateSitemapXML(hostname, urls)
  const sitemapPath = './public/sitemap.xml'
  fs.writeFileSync(sitemapPath, sitemap)
  console.log(`Sitemap generated at: ${sitemapPath}`)
}

const generateSitemapXML = (hostname: string, urls: URLInfo[]): string => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

  urls.forEach((url) => {
    xml += '<url>'
    xml += `<loc>${hostname}${url.url}</loc>`
    xml += `<changefreq>${url.changefreq}</changefreq>`
    xml += `<priority>${url.priority}</priority>`
    xml += '</url>'
  })

  xml += '</urlset>'
  return xml
}

generateSitemap()
