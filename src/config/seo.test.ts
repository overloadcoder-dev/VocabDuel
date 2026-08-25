import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const routes = ['', 'learn', 'play', 'multiplayer', 'multi-duel', 'placement', 'levels', 'how-to-play', 'about', 'privacy', 'terms'] as const
const indexableRoutes = routes.filter((route) => route !== 'privacy' && route !== 'terms')
const origin = 'https://vocabduel.example'

function pageHtml(route: string): string {
  return readFileSync(resolve(process.cwd(), route, 'index.html'), 'utf8')
}

describe('static SEO contract', () => {
  it('gives every indexable route complete and unique metadata', () => {
    const titles = new Set<string>()
    const descriptions = new Set<string>()
    routes.forEach((route) => {
      const html = pageHtml(route)
      const suffix = route ? `${route}/` : ''
      const title = html.match(/<title>(.*?)<\/title>/)?.[1]
      const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]
      expect(title, `${route || 'home'} title`).toBeTruthy()
      expect(description, `${route || 'home'} description`).toBeTruthy()
      expect(titles.has(title!), `duplicate title: ${title}`).toBe(false)
      expect(descriptions.has(description!), `duplicate description: ${description}`).toBe(false)
      titles.add(title!); descriptions.add(description!)
      expect(html.match(/<h1(?:\s|>)/g)).toHaveLength(1)
      expect(html.match(/<link rel="canonical"/g)).toHaveLength(1)
      expect(html).toContain(`<link rel="canonical" href="${origin}/${suffix}`)
      expect(html).toContain('<meta property="og:url"')
      expect(html).toContain('<meta property="og:image"')
      expect(html).toContain('<link rel="manifest"')
      if (route === 'privacy' || route === 'terms') expect(html).toContain('<meta name="robots" content="noindex, follow">')
    })
  })

  it('keeps the sitemap aligned with canonical routes and excludes the 404 page', () => {
    const sitemap = readFileSync(resolve(process.cwd(), 'public/sitemap.xml'), 'utf8')
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
    expect(locations).toEqual(indexableRoutes.map((route) => `${origin}/${route ? `${route}/` : ''}`))
    expect(readFileSync(resolve(process.cwd(), '404.html'), 'utf8')).toContain('<meta name="robots" content="noindex">')
  })

  it('provides installable PNG and maskable app icons', () => {
    const manifest = JSON.parse(readFileSync(resolve(process.cwd(), 'public/site.webmanifest'), 'utf8')) as { icons: Array<{ src: string; purpose: string }> }
    expect(manifest.icons).toEqual(expect.arrayContaining([
      expect.objectContaining({ src: '/favicon-192.png', purpose: 'any' }),
      expect.objectContaining({ src: '/favicon-512.png', purpose: 'any' }),
      expect.objectContaining({ src: '/favicon-maskable-512.png', purpose: 'maskable' }),
    ]))
    for (const file of ['favicon-192.png', 'favicon-512.png', 'favicon-maskable-512.png', 'apple-touch-icon.png']) {
      expect(readFileSync(resolve(process.cwd(), 'public', file)).length).toBeGreaterThan(1_000)
    }
  })
})
