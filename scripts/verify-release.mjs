import { readdir, readFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const releaseDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const blockingTokens = [
  'vocabduel.example',
  'Future sponsor space',
]
const warningTokens = [
  'Replace the operator and contact placeholders',
  'Operator/contact required before launch',
  'Required before launch:',
]
const inspectedTokens = [...blockingTokens, ...warningTokens]
const textExtensions = new Set(['.html', '.xml', '.txt', '.js', '.css', '.json', '.webmanifest'])
const failures = []
const warnings = []
const tokenMatches = new Map(inspectedTokens.map((token) => [token, []]))

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await inspect(path)
    else if (textExtensions.has(extname(entry.name))) {
      const contents = await readFile(path, 'utf8')
      for (const token of inspectedTokens) {
        if (contents.includes(token)) tokenMatches.get(token).push(relative(releaseDirectory, path))
      }
    }
  }
}

await inspect(releaseDirectory)
for (const [token, paths] of tokenMatches) {
  if (!paths.length) continue
  const examples = paths.slice(0, 5).join(', ')
  const remaining = paths.length > 5 ? ` and ${paths.length - 5} more` : ''
  const message = `${paths.length} file(s) contain ${token}: ${examples}${remaining}`
  if (blockingTokens.includes(token)) failures.push(message)
  else warnings.push(message)
}

const sitemap = await readFile(join(releaseDirectory, 'sitemap.xml'), 'utf8')
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const duplicateLocations = [...new Set(sitemapLocations.filter((location, index) => sitemapLocations.indexOf(location) !== index))]
if (duplicateLocations.length) failures.push(`sitemap contains ${duplicateLocations.length} duplicate location(s)`)
for (const location of sitemapLocations) {
  const segments = new URL(location).pathname.split('/').filter(Boolean)
  if (segments.some((segment, index) => index > 0 && segment.toLocaleLowerCase() === segments[index - 1].toLocaleLowerCase())) {
    failures.push(`sitemap location repeats a path segment: ${location}`)
    break
  }
}
for (const segment of ['my', 'en', 'zh']) {
  const wordDirectories = (await readdir(join(releaseDirectory, segment, 'words'), { withFileTypes: true })).filter((entry) => entry.isDirectory())
  if (wordDirectories.length < 3_000) failures.push(`only ${wordDirectories.length} generated ${segment} word pages were found`)
  if (!sitemap.includes(`/${segment}/words/apple/`)) failures.push(`sitemap is missing ${segment} generated word URLs`)
  if (sitemap.includes(`/${segment}/words/telemetry/`)) failures.push(`sitemap contains a ${segment} word awaiting editorial review`)
}

for (const route of ['multiplayer', 'multi-duel']) {
  const englishHtml = await readFile(join(releaseDirectory, 'en', route, 'index.html'), 'utf8')
  const visibleEnglishHtml = englishHtml.replace(/<script[\s\S]*?<\/script>/gi, '')
  if (/\p{Script=Han}/u.test(visibleEnglishHtml)) failures.push(`en/${route} contains visible Chinese source copy`)
}
if (sitemap.includes('/privacy/') || sitemap.includes('/terms/')) failures.push('sitemap contains unfinished legal pages')

for (const [segment, languageTag] of [['my', 'ms-MY'], ['en', 'en-GB'], ['zh', 'zh-Hans']]) {
  const sampleWordPage = await readFile(join(releaseDirectory, segment, 'words', 'apple', 'index.html'), 'utf8')
  for (const requiredMarkup of ['<h1>apple</h1>', '"@type":"DefinedTerm"', `lang="${languageTag}"`, 'hreflang="x-default"']) {
    if (!sampleWordPage.includes(requiredMarkup)) failures.push(`${segment} sample word page is missing ${requiredMarkup}`)
  }
  if (segment === 'en' && sampleWordPage.includes('lang="zh-Hans"')) failures.push('English-only sample word page contains Chinese content')
}

for (const segment of ['my', 'en', 'zh']) {
  const templatedWordPage = await readFile(join(releaseDirectory, segment, 'words', 'telemetry', 'index.html'), 'utf8')
  if (!templatedWordPage.includes('<meta name="robots" content="noindex, follow">')) failures.push(`${segment} templated word page is missing noindex`)
}

for (const segment of ['my', 'en', 'zh']) {
  for (const legalRoute of ['privacy', 'terms']) {
    const legalHtml = await readFile(join(releaseDirectory, segment, legalRoute, 'index.html'), 'utf8')
    if (!legalHtml.includes('<meta name="robots" content="noindex, follow">')) failures.push(`${segment}/${legalRoute} is missing noindex`)
  }
}

const manifest = JSON.parse(await readFile(join(releaseDirectory, 'site.webmanifest'), 'utf8'))
for (const icon of ['favicon-192.png', 'favicon-512.png', 'favicon-maskable-512.png']) {
  if (!manifest.icons.some((entry) => entry.src.endsWith(icon))) failures.push(`manifest is missing ${icon}`)
}
if (warnings.length) console.warn(`Release verification warnings:\n${warnings.map((warning) => `- ${warning}`).join('\n')}`)
if (failures.length) {
  console.error(`Release verification failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`)
  process.exitCode = 1
} else {
  console.log('Release verification passed: no blocking production metadata issues found.')
}
