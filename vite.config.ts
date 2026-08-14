import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'
import { loadEnv, type Plugin } from 'vite'

function normalizeBasePath(value: string | undefined): string {
  if (!value || value === '/') return '/'
  return `/${value.replace(/^\/+|\/+$/g, '')}/`
}

function deploymentMetadata(siteOrigin: string, basePath: string): Plugin {
  return {
    name: 'vocabduel-deployment-metadata',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const baseWithoutLeadingSlash = basePath.slice(1)
        return html
          .replaceAll('https://vocabduel.example', siteOrigin)
          .replace(/href="\/([^"#]*)"/g, (full: string, target: string) => {
            if (basePath !== '/' && target.startsWith(baseWithoutLeadingSlash)) return full
            return `href="${basePath}${target}"`
          })
      },
    },
    closeBundle() {
      for (const relativePath of ['robots.txt', 'sitemap.xml']) {
        const outputPath = resolve(__dirname, 'dist', relativePath)
        writeFileSync(outputPath, readFileSync(outputPath, 'utf8').replaceAll('https://vocabduel.example', siteOrigin))
      }

      const manifestPath = resolve(__dirname, 'dist/site.webmanifest')
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
        start_url: string
        scope: string
        icons: Array<{ src: string }>
      }
      manifest.start_url = basePath
      manifest.scope = basePath
      manifest.icons = manifest.icons.map((icon) => ({ ...icon, src: `${basePath}favicon.svg` }))
      writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '')
  const basePath = normalizeBasePath(env.VITE_BASE_PATH)
  const siteOrigin = (env.VITE_SITE_URL || 'https://vocabduel.example').replace(/\/+$/, '')

  return {
    base: basePath,
    plugins: [tailwindcss(), deploymentMetadata(siteOrigin, basePath)],
    build: {
      rollupOptions: {
        input: {
          home: resolve(__dirname, 'index.html'),
          notFound: resolve(__dirname, '404.html'),
          learn: resolve(__dirname, 'learn/index.html'),
          play: resolve(__dirname, 'play/index.html'),
          multiplayer: resolve(__dirname, 'multiplayer/index.html'),
          placement: resolve(__dirname, 'placement/index.html'),
          levels: resolve(__dirname, 'levels/index.html'),
          howToPlay: resolve(__dirname, 'how-to-play/index.html'),
          about: resolve(__dirname, 'about/index.html'),
          privacy: resolve(__dirname, 'privacy/index.html'),
          terms: resolve(__dirname, 'terms/index.html')
        }
      }
    },
    test: {
      environment: 'node',
      include: ['src/**/*.test.ts']
    }
  }
})
