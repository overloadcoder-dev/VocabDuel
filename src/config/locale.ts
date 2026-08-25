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

function pathWithinBase(pathname: string, basePath: string): string {
  const normalisedBase = `/${basePath.replace(/^\/+|\/+$/g, '')}`
  if (normalisedBase === '/') return pathname
  const lowerPath = pathname.toLocaleLowerCase()
  const lowerBase = normalisedBase.toLocaleLowerCase()
  if (lowerPath === lowerBase) return '/'
  return lowerPath.startsWith(`${lowerBase}/`) ? pathname.slice(normalisedBase.length) : pathname
}

export function languageFromPath(pathname: string, basePath = '/'): AppLanguage {
  const segments = pathWithinBase(pathname, basePath).replace(/^\/+/, '').split('/').map((segment) => segment.toLocaleLowerCase())
  const segment = segments.find((candidate) => ['en', 'my', 'ms', 'zh', 'cn'].includes(candidate))
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

export function languageNavigationPath(
  pathname: string,
  search: string,
  hash: string,
  language: AppLanguage,
  basePath = '/',
): string {
  const routeWithinBase = pathWithinBase(pathname, basePath)
  const localisedRoute = languagePath(routeWithinBase, language).replace(/^\/+/, '')
  const normalisedBase = basePath === '/' ? '/' : `/${basePath.replace(/^\/+|\/+$/g, '')}/`
  return `${normalisedBase}${localisedRoute}${search}${hash}`.replace(/(?<!:)\/{2,}/g, '/')
}

export const LANGUAGE_NAMES: Record<AppLanguage, string> = {
  en: 'English (UK)',
  ms: 'Bahasa Melayu',
  zh: '简体中文',
}
