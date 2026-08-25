export type AppLanguage = 'en' | 'ms' | 'zh'

export const APP_LANGUAGES = ['en', 'ms', 'zh'] as const

export const LANGUAGE_URL_SEGMENTS: Record<AppLanguage, string> = {
  en: 'en',
  ms: 'my',
  zh: 'zh',
}

export const LANGUAGE_HTML_TAGS: Record<AppLanguage, string> = {
  en: 'en-GB',
  ms: 'ms-MY',
  zh: 'zh-Hans',
}

export function languageFromPath(pathname: string): AppLanguage {
  const segment = pathname.replace(/^\/+/, '').split('/')[0]?.toLocaleLowerCase()
  if (segment === 'my' || segment === 'ms') return 'ms'
  if (segment === 'zh' || segment === 'cn') return 'zh'
  return 'en'
}

export function currentLanguage(): AppLanguage {
  const browserLocation = (globalThis as { location?: { pathname: string } }).location
  return languageFromPath(browserLocation?.pathname ?? '/en/')
}

export function stripLanguageSegment(pathname: string): string {
  const normalised = `/${pathname.replace(/^\/+/, '')}`
  return normalised.replace(/^\/(?:en|my|ms|zh|cn)(?=\/|$)/i, '') || '/'
}

export function languagePath(pathname: string, language: AppLanguage = currentLanguage()): string {
  const route = stripLanguageSegment(pathname).replace(/^\/+/, '')
  return `/${LANGUAGE_URL_SEGMENTS[language]}/${route}`.replace(/(?<!:)\/{2,}/g, '/')
}

export const LANGUAGE_NAMES: Record<AppLanguage, string> = {
  en: 'English (UK)',
  ms: 'Bahasa Melayu',
  zh: '简体中文',
}
