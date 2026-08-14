export function sitePath(path: string): string {
  const relativePath = path.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${relativePath}`
}

export const SITE = {
  name: 'VocabDuel',
  origin: (import.meta.env.VITE_SITE_URL || 'https://vocabduel.example').replace(/\/+$/, ''),
  description: 'Learn English vocabulary with clear Chinese guidance, pronunciation, examples and focused games.',
  routes: {
    home: sitePath('/'),
    learn: sitePath('/learn/'),
    play: sitePath('/play/'),
    multiplayer: sitePath('/multiplayer/'),
    placement: sitePath('/placement/'),
    levels: sitePath('/levels/'),
    howToPlay: sitePath('/how-to-play/'),
    about: sitePath('/about/'),
    privacy: sitePath('/privacy/'),
    terms: sitePath('/terms/'),
  },
} as const
