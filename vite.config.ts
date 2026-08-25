import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'
import { loadEnv, type Plugin } from 'vite'
import { level1Vocabulary } from './src/data/vocabulary/level-1'
import { level2Vocabulary } from './src/data/vocabulary/level-2'
import { level3Vocabulary } from './src/data/vocabulary/level-3'
import { level4Vocabulary } from './src/data/vocabulary/level-4'
import { level5Vocabulary } from './src/data/vocabulary/level-5'
import type { VocabularyItem } from './src/types/vocabulary'
import { vocabularyWordSlug } from './src/data/word-slug'

const allVocabulary = [...level1Vocabulary, ...level2Vocabulary, ...level3Vocabulary, ...level4Vocabulary, ...level5Vocabulary] as readonly VocabularyItem[]

function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;')
}

function wordPageHtml(word: VocabularyItem, previous: VocabularyItem, next: VocabularyItem, siteOrigin: string, basePath: string, cssFile: string, byTerm: ReadonlyMap<string, VocabularyItem>): string {
  const wordSlug = vocabularyWordSlug(word.id)
  const relativeUrl = `${basePath}words/${wordSlug}/`
  const canonical = `${siteOrigin}${relativeUrl}`
  const variantLabel = word.id === word.normalizedTerm ? '' : ` (${word.id})`
  const description = `${word.term}${variantLabel}: ${word.englishDefinition} Chinese meaning: ${word.chineseShort}`.slice(0, 155)
  const links = [...(word.synonyms ?? []), ...(word.antonyms ?? [])]
    .map((term) => byTerm.get(term.toLocaleLowerCase()))
    .filter((item): item is VocabularyItem => Boolean(item))
    .slice(0, 8)
  const structuredData = JSON.stringify({ '@context': 'https://schema.org', '@type': 'DefinedTerm', name: word.term, description: word.englishDefinition, inDefinedTermSet: `${siteOrigin}${basePath}learn/` }).replaceAll('<', '\\u003c')
  const related = links.length ? links.map((item) => `<a class="tag" href="${basePath}words/${vocabularyWordSlug(item.id)}/">${escapeHtml(item.term)}</a>`).join('') : '<span class="text-muted">No linked terms yet.</span>'
  return `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><title>${escapeHtml(word.term + variantLabel)} Meaning in Chinese, Definition &amp; Examples | VocabDuel</title><meta name="description" content="${escapeHtml(description)}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:site_name" content="VocabDuel"><meta property="og:title" content="${escapeHtml(word.term + variantLabel)} meaning and examples"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${siteOrigin}${basePath}social-card.svg"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="${basePath}favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" sizes="180x180" href="${basePath}apple-touch-icon.png"><link rel="manifest" href="${basePath}site.webmanifest"><link rel="stylesheet" href="${basePath}assets/${cssFile}"><script type="application/ld+json">${structuredData}</script></head>
<body class="content-page word-page"><a class="skip-link" href="#main-content">Skip to content</a><header class="site-header"><a class="brand" href="${basePath}" aria-label="VocabDuel home">Vocab<span>Duel</span></a><nav aria-label="Primary navigation"><a href="${basePath}learn/">Learn</a><a href="${basePath}play/">Play</a><a href="${basePath}levels/">Levels</a></nav></header>
<main id="main-content" class="content-main"><nav class="word-breadcrumbs" aria-label="Breadcrumb"><a href="${basePath}">Home</a><span aria-hidden="true">›</span><a href="${basePath}learn/">Words</a><span aria-hidden="true">›</span><span aria-current="page">${escapeHtml(word.term)}</span></nav><article class="panel word-detail"><p class="eyebrow">Level ${word.level}${word.cefr ? ` · ${word.cefr}` : ''}</p><h1>${escapeHtml(word.term)}</h1><p class="word-ipa">${escapeHtml(word.ipa ?? 'Pronunciation guide unavailable')} · ${escapeHtml(word.partOfSpeech.join(' · '))}</p><p class="word-chinese-short" lang="zh-Hans">${escapeHtml(word.chineseShort)}</p><section lang="zh-Hans"><h2>中文详解</h2><p>${escapeHtml(word.chineseExplanation)}</p></section><section><h2>English definition</h2><p>${escapeHtml(word.englishDefinition)}</p></section><section><h2>Example</h2><blockquote>${escapeHtml(word.examples[0]?.english ?? '')}</blockquote><p lang="zh-Hans">${escapeHtml(word.examples[0]?.chinese ?? '')}</p></section><section><h2>Related words</h2><div class="flex flex-wrap gap-2">${related}</div></section><div class="word-page-actions"><a class="button button-primary" href="${basePath}play/?words=${encodeURIComponent(word.id)}">Practise this word</a><a class="button button-secondary" href="${basePath}learn/#${encodeURIComponent(word.id)}">Open in word library</a></div></article><nav class="word-pagination" aria-label="Adjacent vocabulary"><a href="${basePath}words/${vocabularyWordSlug(previous.id)}/">← ${escapeHtml(previous.term)}</a><a href="${basePath}words/${vocabularyWordSlug(next.id)}/">${escapeHtml(next.term)} →</a></nav></main><footer class="site-footer"><nav aria-label="Footer navigation"><a href="${basePath}about/">About</a><a href="${basePath}privacy/">Privacy</a><a href="${basePath}terms/">Terms</a></nav><p>© ${new Date().getFullYear()} VocabDuel</p></footer></body></html>`
}

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
          .replace('</head>', `<link rel="apple-touch-icon" sizes="180x180" href="${basePath}apple-touch-icon.png"></head>`)
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
      manifest.icons = manifest.icons.map((icon) => ({ ...icon, src: `${basePath}${icon.src.replace(/^\/+/, '')}` }))
      writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

      const cssFile = readdirSync(resolve(__dirname, 'dist/assets')).find((file) => file.endsWith('.css'))
      if (!cssFile) throw new Error('Built CSS asset was not found for generated word pages.')
      const uniqueWords = [...new Map(allVocabulary.map((word) => [word.id, word])).values()]
      const byTerm = new Map(uniqueWords.map((word) => [word.normalizedTerm, word]))
      uniqueWords.forEach((word, index) => {
        const outputDirectory = resolve(__dirname, 'dist/words', vocabularyWordSlug(word.id))
        mkdirSync(outputDirectory, { recursive: true })
        writeFileSync(resolve(outputDirectory, 'index.html'), wordPageHtml(word, uniqueWords[(index - 1 + uniqueWords.length) % uniqueWords.length]!, uniqueWords[(index + 1) % uniqueWords.length]!, siteOrigin, basePath, cssFile, byTerm))
      })
      const sitemapPath = resolve(__dirname, 'dist/sitemap.xml')
      const wordLocations = uniqueWords.map((word) => `  <url><loc>${siteOrigin}${basePath}words/${vocabularyWordSlug(word.id)}/</loc></url>`).join('\n')
      writeFileSync(sitemapPath, readFileSync(sitemapPath, 'utf8').replace('</urlset>', `${wordLocations}\n</urlset>`))
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
