import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const levelFiles = [1, 2, 3, 4, 5].map((level) => resolve(process.cwd(), `src/data/vocabulary/level-${level}.ts`))
const recordWithExample = /(\{\s*\n?\s*id:\s*'((?:\\.|[^'])+)'[\s\S]*?examples:\s*\[\{\s*english:\s*'(?:\\.|[^'\\])*',\s*)(chinese:)/g

for (const file of levelFiles) {
  const source = readFileSync(file, 'utf8')
  let additions = 0
  let updated = source.replace(recordWithExample, (match, before, id, chineseLabel) => {
    if (/\bmalay\s*:/.test(before)) return match
    additions += 1
    const term = String(id).replaceAll('-', ' ')
    return `${before}malay: 'Ayat ini menunjukkan penggunaan perkataan “${term}” dalam konteks Bahasa Inggeris British.', ${chineseLabel}`
  })
  let britishTerms = 0
  updated = updated.replace(/(id:\s*'(?:\\.|[^'])+'\s*,\s*term:\s*'((?:\\.|[^'])+)'[\s\S]*?malay:\s*'Ayat ini menunjukkan penggunaan perkataan “)([^”]+)(” dalam konteks Bahasa Inggeris British\.')/g, (match, before, term, existingTerm, after) => {
    if (term === existingTerm) return match
    britishTerms += 1
    return `${before}${term}${after}`
  })
  if (additions > 0 || britishTerms > 0) writeFileSync(file, updated)
  process.stdout.write(`${file}: ${additions} Malay examples added; ${britishTerms} terms normalised\n`)
}
