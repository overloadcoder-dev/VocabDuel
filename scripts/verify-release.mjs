import { readdir, readFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const releaseDirectory = fileURLToPath(new URL('../dist/', import.meta.url))
const forbidden = ['vocabduel.example', 'Future sponsor space']
const textExtensions = new Set(['.html', '.xml', '.txt', '.js', '.css', '.json', '.webmanifest'])
const failures = []

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await inspect(path)
    else if (textExtensions.has(extname(entry.name))) {
      const contents = await readFile(path, 'utf8')
      for (const token of forbidden) {
        if (contents.includes(token)) failures.push(`${relative(releaseDirectory, path)} contains ${token}`)
      }
    }
  }
}

await inspect(releaseDirectory)

const sitemap = await readFile(join(releaseDirectory, 'sitemap.xml'), 'utf8')
const wordDirectories = (await readdir(join(releaseDirectory, 'words'), { withFileTypes: true })).filter((entry) => entry.isDirectory())
if (wordDirectories.length < 3_000) failures.push(`only ${wordDirectories.length} generated word pages were found`)
if (!sitemap.includes('/words/apple/')) failures.push('sitemap is missing generated word URLs')
if (sitemap.includes('/privacy/') || sitemap.includes('/terms/')) failures.push('sitemap contains unfinished legal pages')

const sampleWordPage = await readFile(join(releaseDirectory, 'words', 'apple', 'index.html'), 'utf8')
for (const requiredMarkup of ['<h1>apple</h1>', '"@type":"DefinedTerm"', 'lang="zh-Hans"']) {
  if (!sampleWordPage.includes(requiredMarkup)) failures.push(`sample word page is missing ${requiredMarkup}`)
}

for (const legalRoute of ['privacy', 'terms']) {
  const legalHtml = await readFile(join(releaseDirectory, legalRoute, 'index.html'), 'utf8')
  if (!legalHtml.includes('<meta name="robots" content="noindex, follow">')) failures.push(`${legalRoute} is missing noindex`)
}

const manifest = JSON.parse(await readFile(join(releaseDirectory, 'site.webmanifest'), 'utf8'))
for (const icon of ['favicon-192.png', 'favicon-512.png', 'favicon-maskable-512.png']) {
  if (!manifest.icons.some((entry) => entry.src.endsWith(icon))) failures.push(`manifest is missing ${icon}`)
}
if (failures.length) {
  console.error(`Release verification failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`)
  process.exitCode = 1
} else {
  console.log('Release verification passed: no provisional origin or sponsor placeholders found.')
}
