import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'
import { loadEnv, type Plugin } from 'vite'

const initialLoaderCss = `
#page-transition-loader{position:fixed;inset:0;z-index:200;display:grid;align-content:center;justify-items:center;gap:.65rem;background:rgba(251,252,255,.97);color:#172033;opacity:1;backdrop-filter:blur(12px);transition:opacity .16s ease}
#page-transition-loader[hidden]{display:none}
#page-transition-loader:not([data-visible]){opacity:0}
#page-transition-loader strong{margin-top:.5rem;font:800 clamp(1.15rem,4vw,1.5rem)/normal Inter,"Noto Sans SC",ui-sans-serif,system-ui,sans-serif}
#page-transition-loader small{color:#667085;font:800 .75rem/normal Inter,"Noto Sans SC",ui-sans-serif,system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase}
#page-transition-loader .page-transition-spinner{box-sizing:border-box;width:clamp(4rem,16vw,5.5rem);height:clamp(4rem,16vw,5.5rem);border:.42rem solid #e0dcff;border-top-color:#6757e8;border-right-color:#15a3b8;border-radius:50%;box-shadow:0 14px 35px rgba(77,59,197,.15);animation:initial-loader-spin .72s linear infinite}
@keyframes initial-loader-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){#page-transition-loader,#page-transition-loader .page-transition-spinner{transition:none;animation:none}}
`

const initialLoaderScript = `
(()=>{const finish=()=>requestAnimationFrame(()=>{const loader=document.querySelector('#page-transition-loader');if(!loader)return;loader.hidden=true;loader.removeAttribute('data-visible')});if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true})})()
`

function initialPageLoader(): Plugin {
  return {
    name: 'vocabduel-initial-page-loader',
    transformIndexHtml(html) {
      const loaderHead = `<style id="initial-page-loader-styles">${initialLoaderCss}</style><script>${initialLoaderScript}</script>`
      const loaderBody = '<div id="page-transition-loader" class="page-transition-loader" role="status" aria-live="polite" aria-atomic="true" data-visible><span class="page-transition-spinner" aria-hidden="true"></span><strong>正在载入页面…</strong><small>VocabDuel</small></div>'
      return html
        .replace(/(<meta\s+charset=[^>]+>)/i, `$1\n${loaderHead}`)
        .replace(/(<body(?:\s[^>]*)?>)/i, `$1\n${loaderBody}`)
    },
  }
}

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
    plugins: [initialPageLoader(), tailwindcss(), deploymentMetadata(siteOrigin, basePath)],
    build: {
      rollupOptions: {
        input: {
          home: resolve(__dirname, 'index.html'),
          notFound: resolve(__dirname, '404.html'),
          learn: resolve(__dirname, 'learn/index.html'),
          play: resolve(__dirname, 'play/index.html'),
          multiplayer: resolve(__dirname, 'multiplayer/index.html'),
          multiDuel: resolve(__dirname, 'multi-duel/index.html'),
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
