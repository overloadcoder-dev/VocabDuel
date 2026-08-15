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
if (failures.length) {
  console.error(`Release verification failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`)
  process.exitCode = 1
} else {
  console.log('Release verification passed: no provisional origin or sponsor placeholders found.')
}
