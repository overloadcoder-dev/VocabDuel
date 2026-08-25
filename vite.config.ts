import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
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
import { isEditoriallyIndexable } from './src/data/editorial-quality'
import { LANGUAGE_HTML_TAGS, LANGUAGE_URL_SEGMENTS, type AppLanguage } from './src/config/locale'
import { LOCALISED_SEO, SEO_ROUTES, type SeoRoute } from './src/config/localised-seo'

const allVocabulary = [...level1Vocabulary, ...level2Vocabulary, ...level3Vocabulary, ...level4Vocabulary, ...level5Vocabulary] as readonly VocabularyItem[]
const projectRoot = fileURLToPath(new URL('.', import.meta.url))

function uniqueVocabularyItems(words: readonly VocabularyItem[]): VocabularyItem[] {
  const byId = new Map<string, VocabularyItem>()
  for (const word of words) {
    if (!byId.has(word.id)) byId.set(word.id, word)
  }
  return [...byId.values()]
}

function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;')
}

const appLanguages = ['en', 'ms', 'zh'] as const satisfies readonly AppLanguage[]

function routeSuffix(route: SeoRoute): string {
  return route ? `${route}/` : ''
}

function localisedUrl(siteOrigin: string, basePath: string, language: AppLanguage, route: SeoRoute): string {
  return `${siteOrigin}${basePath}${LANGUAGE_URL_SEGMENTS[language]}/${routeSuffix(route)}`
}

function localiseBuiltPage(html: string, language: AppLanguage, route: SeoRoute, siteOrigin: string, basePath: string): string {
  const seo = LOCALISED_SEO[language][route]
  const canonical = localisedUrl(siteOrigin, basePath, language, route)
  const alternates = appLanguages.map((alternate) => `<link rel="alternate" hreflang="${alternate === 'ms' ? 'ms' : alternate}" href="${localisedUrl(siteOrigin, basePath, alternate, route)}">`).join('')
    + `<link rel="alternate" hreflang="x-default" href="${localisedUrl(siteOrigin, basePath, 'en', route)}">`
  let output = html
    .replace(/<html lang="[^"]+">/, `<html lang="${LANGUAGE_HTML_TAGS[language]}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(seo.description)}">`)
    .replace(/<link rel="canonical" href="[^"]+">/, `${alternates}<link rel="canonical" href="${canonical}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(seo.title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(seo.description)}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${escapeHtml(seo.title)}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${escapeHtml(seo.description)}">`)
    .replace(/<h1([^>]*)>[\s\S]*?<\/h1>/, `<h1$1>${escapeHtml(seo.headline)}</h1><p class="locale-page-summary mt-3 max-w-3xl text-lg leading-8 text-muted" lang="${LANGUAGE_HTML_TAGS[language]}">${escapeHtml(seo.summary)}</p>`)

  for (const targetRoute of SEO_ROUTES) {
    const existing = `${basePath}${routeSuffix(targetRoute)}`
    const localised = `${basePath}${LANGUAGE_URL_SEGMENTS[language]}/${routeSuffix(targetRoute)}`
    output = output.replaceAll(`href="${existing}"`, `href="${localised}"`)
  }
  if (language !== 'zh') output = output.replace(/<([a-z][a-z0-9-]*)([^>]*\slang="zh-Hans"[^>]*)>/gi, '<$1$2 hidden>')
  return output
}

function languageGatewayHtml(siteOrigin: string, basePath: string, cssFile: string): string {
  const choices = [
    ['my', 'Bahasa Melayu', 'Belajar kosa kata Bahasa Inggeris British dengan contoh Bahasa Melayu.'],
    ['en', 'English (UK)', 'Learn with British English definitions, spellings and pronunciation.'],
    ['zh', '简体中文', '通过简体中文讲解和例句学习英式英语词汇。'],
  ] as const
  return `<!doctype html><html lang="en-GB"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>VocabDuel — Choose your language</title><meta name="description" content="Choose Bahasa Melayu, British English, or Simplified Chinese to learn British English vocabulary with VocabDuel."><meta name="theme-color" content="#6757e8"><link rel="canonical" href="${siteOrigin}${basePath}">${appLanguages.map((language) => `<link rel="alternate" hreflang="${language === 'ms' ? 'ms' : language}" href="${localisedUrl(siteOrigin, basePath, language, '')}">`).join('')}<link rel="alternate" hreflang="x-default" href="${siteOrigin}${basePath}"><link rel="icon" href="${basePath}favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${basePath}assets/${cssFile}"></head><body><main id="main-content" class="page-wrap grid min-h-screen place-content-center py-12"><section class="glass-card mx-auto max-w-3xl p-7 sm:p-10"><p class="eyebrow">VocabDuel</p><h1 class="mt-3 text-4xl font-black">Choose your learning language</h1><p class="mt-3 text-lg text-muted">All versions teach British English. You can change language at any time without losing local progress.</p><div class="mt-8 grid gap-4 sm:grid-cols-3">${choices.map(([segment, name, description]) => `<a class="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:border-brand" href="${basePath}${segment}/"><strong class="text-xl">${name}</strong><span class="mt-2 block text-sm leading-6 text-muted">${description}</span></a>`).join('')}</div></section></main></body></html>`
}

function wordPageHtml(word: VocabularyItem, previous: VocabularyItem, next: VocabularyItem, siteOrigin: string, basePath: string, cssFile: string, byTerm: ReadonlyMap<string, VocabularyItem>, language: AppLanguage): string {
  const wordSlug = vocabularyWordSlug(word.id)
  const localeRoot = `${basePath}${LANGUAGE_URL_SEGMENTS[language]}/`
  const canonical = `${siteOrigin}${localeRoot}words/${wordSlug}/`
  const variantLabel = word.id === word.normalizedTerm ? '' : ` (${word.id})`
  const localExample = language === 'ms' ? word.examples[0]?.malay ?? '' : language === 'zh' ? word.examples[0]?.chinese ?? '' : word.examples[0]?.english ?? ''
  const title = language === 'ms' ? `${word.term}${variantLabel}: Maksud & Contoh Bahasa Melayu | VocabDuel` : language === 'zh' ? `${word.term}${variantLabel} 中文意思、英式发音与例句 | VocabDuel` : `${word.term}${variantLabel} British English Definition & Examples | VocabDuel`
  const description = (language === 'ms' ? `${word.term}: definisi Bahasa Inggeris British dan contoh Bahasa Melayu. ${localExample}` : language === 'zh' ? `${word.term} 的英式英语释义、中文解释和例句。${word.chineseShort}` : `${word.term}: British English definition, pronunciation and example. ${word.englishDefinition}`).slice(0, 155)
  const labels = language === 'ms'
    ? { home: 'Utama', words: 'Perkataan', play: 'Main', level: 'Tahap', definition: 'Definisi Bahasa Inggeris', example: 'Contoh', related: 'Perkataan berkaitan', practise: 'Latih perkataan ini', library: 'Buka dalam pustaka', pronunciation: 'Panduan sebutan tidak tersedia', about: 'Tentang', privacy: 'Privasi', terms: 'Terma', skip: 'Langkau ke kandungan' }
    : language === 'zh'
      ? { home: '首页', words: '单词', play: '练习', level: '等级', definition: '英文释义', example: '例句', related: '相关词汇', practise: '练习这个单词', library: '在词库中打开', pronunciation: '暂无发音指南', about: '关于', privacy: '隐私', terms: '条款', skip: '跳至主要内容' }
      : { home: 'Home', words: 'Words', play: 'Play', level: 'Level', definition: 'British English definition', example: 'Example', related: 'Related words', practise: 'Practise this word', library: 'Open in word library', pronunciation: 'Pronunciation guide unavailable', about: 'About', privacy: 'Privacy', terms: 'Terms', skip: 'Skip to content' }
  const links = [...(word.synonyms ?? []), ...(word.antonyms ?? [])].map((term) => byTerm.get(term.toLocaleLowerCase())).filter((item): item is VocabularyItem => Boolean(item)).slice(0, 8)
  const related = links.length ? links.map((item) => `<a class="tag" href="${localeRoot}words/${vocabularyWordSlug(item.id)}/">${escapeHtml(item.term)}</a>`).join('') : '<span class="text-muted">—</span>'
  const alternateLinks = appLanguages.map((alternate) => `<link rel="alternate" hreflang="${alternate === 'ms' ? 'ms' : alternate}" href="${siteOrigin}${basePath}${LANGUAGE_URL_SEGMENTS[alternate]}/words/${wordSlug}/">`).join('') + `<link rel="alternate" hreflang="x-default" href="${siteOrigin}${basePath}en/words/${wordSlug}/">`
  const structuredData = JSON.stringify({ '@context': 'https://schema.org', '@type': 'DefinedTerm', name: word.term, description: word.englishDefinition, inDefinedTermSet: `${siteOrigin}${localeRoot}learn/`, inLanguage: LANGUAGE_HTML_TAGS[language] }).replaceAll('<', '\\u003c')
  const robots = isEditoriallyIndexable(word) ? '' : '<meta name="robots" content="noindex, follow">'
  const localDetail = language === 'zh' ? `<section lang="zh-Hans"><h2>中文详解</h2><p>${escapeHtml(word.chineseExplanation)}</p></section>` : language === 'ms' ? `<section lang="ms-MY"><h2>Contoh Bahasa Melayu</h2><p>${escapeHtml(localExample)}</p></section>` : ''
  const translatedExample = language === 'en' ? '' : `<p lang="${LANGUAGE_HTML_TAGS[language]}">${escapeHtml(localExample)}</p>`
  return `<!doctype html><html lang="${LANGUAGE_HTML_TAGS[language]}"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">${robots}<title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">${alternateLinks}<link rel="canonical" href="${canonical}"><meta property="og:type" content="article"><meta property="og:site_name" content="VocabDuel"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${siteOrigin}${basePath}social-card.svg"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="${basePath}favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" sizes="180x180" href="${basePath}apple-touch-icon.png"><link rel="manifest" href="${basePath}site.webmanifest"><link rel="stylesheet" href="${basePath}assets/${cssFile}"><script type="application/ld+json">${structuredData}</script></head><body class="content-page word-page"><a class="skip-link" href="#main-content">${labels.skip}</a><header class="site-header"><a class="brand" href="${localeRoot}" aria-label="VocabDuel">Vocab<span>Duel</span></a><nav><a href="${localeRoot}learn/">${labels.words}</a><a href="${localeRoot}play/">${labels.play}</a><a href="${localeRoot}levels/">${labels.level}</a></nav></header><main id="main-content" class="content-main"><nav class="word-breadcrumbs" aria-label="Breadcrumb"><a href="${localeRoot}">${labels.home}</a><span aria-hidden="true">›</span><a href="${localeRoot}learn/">${labels.words}</a><span aria-hidden="true">›</span><span aria-current="page">${escapeHtml(word.term)}</span></nav><article class="panel word-detail"><p class="eyebrow">${labels.level} ${word.level}${word.cefr ? ` · ${word.cefr}` : ''}</p><h1>${escapeHtml(word.term)}</h1><p class="word-ipa">${escapeHtml(word.ipa ?? labels.pronunciation)} · ${escapeHtml(word.partOfSpeech.join(' · '))}</p>${language === 'zh' ? `<p class="word-chinese-short" lang="zh-Hans">${escapeHtml(word.chineseShort)}</p>` : ''}${localDetail}<section><h2>${labels.definition}</h2><p>${escapeHtml(word.englishDefinition)}</p></section><section><h2>${labels.example}</h2><blockquote>${escapeHtml(word.examples[0]?.english ?? '')}</blockquote>${translatedExample}</section><section><h2>${labels.related}</h2><div class="flex flex-wrap gap-2">${related}</div></section><div class="word-page-actions"><a class="button button-primary" href="${localeRoot}play/?words=${encodeURIComponent(word.id)}">${labels.practise}</a><a class="button button-secondary" href="${localeRoot}learn/#${encodeURIComponent(word.id)}">${labels.library}</a></div></article><nav class="word-pagination" aria-label="Adjacent vocabulary"><a href="${localeRoot}words/${vocabularyWordSlug(previous.id)}/">← ${escapeHtml(previous.term)}</a><a href="${localeRoot}words/${vocabularyWordSlug(next.id)}/">${escapeHtml(next.term)} →</a></nav></main><footer class="site-footer"><nav><a href="${localeRoot}about/">${labels.about}</a><a href="${localeRoot}privacy/">${labels.privacy}</a><a href="${localeRoot}terms/">${labels.terms}</a></nav><p>© ${new Date().getFullYear()} VocabDuel</p></footer></body></html>`
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
(()=>{const segment=location.pathname.split('/').filter(Boolean)[0];const label=document.querySelector('[data-loader-label]');if(label)label.textContent=segment==='my'?'Memuatkan halaman…':segment==='zh'||segment==='cn'?'正在加载页面…':'Loading page…';const finish=()=>requestAnimationFrame(()=>{const loader=document.querySelector('#page-transition-loader');if(!loader)return;loader.hidden=true;loader.removeAttribute('data-visible')});if(document.readyState==='complete')finish();else window.addEventListener('load',finish,{once:true})})()
`

function initialPageLoader(): Plugin {
  return {
    name: 'vocabduel-initial-page-loader',
    transformIndexHtml(html) {
      const loaderHead = `<style id="initial-page-loader-styles">${initialLoaderCss}</style><script>${initialLoaderScript}</script>`
      const loaderBody = '<div id="page-transition-loader" class="page-transition-loader" role="status" aria-live="polite" aria-atomic="true" data-visible><span class="page-transition-spinner" aria-hidden="true"></span><strong data-loader-label>Loading page…</strong><small>VocabDuel</small></div>'
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
      const robotsPath = resolve(projectRoot, 'dist/robots.txt')
      writeFileSync(robotsPath, readFileSync(robotsPath, 'utf8').replaceAll('https://vocabduel.example', siteOrigin))

      const manifestPath = resolve(projectRoot, 'dist/site.webmanifest')
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
        start_url: string
        scope: string
        icons: Array<{ src: string }>
      }
      manifest.start_url = basePath
      manifest.scope = basePath
      manifest.icons = manifest.icons.map((icon) => ({ ...icon, src: `${basePath}${icon.src.replace(/^\/+/, '')}` }))
      writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

      const cssFile = readdirSync(resolve(projectRoot, 'dist/assets')).find((file) => file.endsWith('.css'))
      if (!cssFile) throw new Error('Built CSS asset was not found for generated word pages.')

      for (const route of SEO_ROUTES) {
        const sourcePath = resolve(projectRoot, 'dist', route, 'index.html')
        const sourceHtml = readFileSync(sourcePath, 'utf8')
        for (const language of appLanguages) {
          const outputDirectory = resolve(projectRoot, 'dist', LANGUAGE_URL_SEGMENTS[language], route)
          mkdirSync(outputDirectory, { recursive: true })
          writeFileSync(resolve(outputDirectory, 'index.html'), localiseBuiltPage(sourceHtml, language, route, siteOrigin, basePath))
        }
      }
      writeFileSync(resolve(projectRoot, 'dist/index.html'), languageGatewayHtml(siteOrigin, basePath, cssFile))

      const uniqueWords = uniqueVocabularyItems(allVocabulary)
      const indexableWords = uniqueWords.filter(isEditoriallyIndexable)
      const byTerm = new Map(uniqueWords.map((word) => [word.normalizedTerm, word]))
      for (const language of appLanguages) {
        uniqueWords.forEach((word, index) => {
          const outputDirectory = resolve(projectRoot, 'dist', LANGUAGE_URL_SEGMENTS[language], 'words', vocabularyWordSlug(word.id))
          mkdirSync(outputDirectory, { recursive: true })
          writeFileSync(resolve(outputDirectory, 'index.html'), wordPageHtml(word, uniqueWords[(index - 1 + uniqueWords.length) % uniqueWords.length]!, uniqueWords[(index + 1) % uniqueWords.length]!, siteOrigin, basePath, cssFile, byTerm, language))
        })
      }
      const sitemapPath = resolve(projectRoot, 'dist/sitemap.xml')
      const pageLocations = appLanguages.flatMap((language) => SEO_ROUTES.filter((route) => route !== 'privacy' && route !== 'terms').map((route) => `  <url><loc>${localisedUrl(siteOrigin, basePath, language, route)}</loc></url>`))
      const wordLocations = appLanguages.flatMap((language) => indexableWords.map((word) => `  <url><loc>${siteOrigin}${basePath}${LANGUAGE_URL_SEGMENTS[language]}/words/${vocabularyWordSlug(word.id)}/</loc></url>`))
      writeFileSync(sitemapPath, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...pageLocations, ...wordLocations].join('\n')}\n</urlset>\n`)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, '')
  const basePath = normalizeBasePath(env.VITE_BASE_PATH)
  const siteOrigin = (env.VITE_SITE_URL || 'https://vocabduel.example').replace(/\/+$/, '')

  return {
    base: basePath,
    plugins: [initialPageLoader(), tailwindcss(), ...(mode === 'test' ? [] : [deploymentMetadata(siteOrigin, basePath)])],
    build: {
      rollupOptions: {
        input: {
          home: resolve(projectRoot, 'index.html'),
          notFound: resolve(projectRoot, '404.html'),
          learn: resolve(projectRoot, 'learn/index.html'),
          play: resolve(projectRoot, 'play/index.html'),
          multiplayer: resolve(projectRoot, 'multiplayer/index.html'),
          multiDuel: resolve(projectRoot, 'multi-duel/index.html'),
          placement: resolve(projectRoot, 'placement/index.html'),
          levels: resolve(projectRoot, 'levels/index.html'),
          howToPlay: resolve(projectRoot, 'how-to-play/index.html'),
          about: resolve(projectRoot, 'about/index.html'),
          privacy: resolve(projectRoot, 'privacy/index.html'),
          terms: resolve(projectRoot, 'terms/index.html')
        }
      }
    },
    test: {
      environment: 'node',
      include: ['src/**/*.test.ts']
    }
  }
})
