import { currentLanguage, languagePath, LANGUAGE_NAMES, SITE, type AppLanguage } from '../config'
import { installBackToTop } from './back-to-top'
import { installPageTransitions } from './page-transition'
import { localiseStaticDocument } from './localise-static'

installPageTransitions()
installBackToTop()
localiseStaticDocument()

document.addEventListener('click', (event) => {
  const target = event.target
  if (!(target instanceof Element)) return
  const toggle = target.closest<HTMLButtonElement>('[data-app-menu-button]')
  if (toggle) {
    const menu = document.querySelector<HTMLElement>(`#${toggle.getAttribute('aria-controls')}`)
    if (!menu) return
    const expanded = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!expanded))
    menu.toggleAttribute('data-open', !expanded)
    return
  }
  if (target.closest('.app-nav a')) {
    document.querySelector<HTMLButtonElement>('[data-app-menu-button]')?.setAttribute('aria-expanded', 'false')
    document.querySelector<HTMLElement>('.app-nav')?.removeAttribute('data-open')
  }
})

document.addEventListener('change', (event) => {
  const target = event.target
  if (!(target instanceof HTMLSelectElement) || !target.matches('[data-language-switcher]')) return
  window.location.assign(target.value)
})

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return
  const toggle = document.querySelector<HTMLButtonElement>('[data-app-menu-button][aria-expanded="true"]')
  if (!toggle) return
  document.querySelector<HTMLElement>(`#${toggle.getAttribute('aria-controls')}`)?.removeAttribute('data-open')
  toggle.setAttribute('aria-expanded', 'false')
  toggle.focus()
})

const mark = `<span aria-hidden="true" class="grid size-9 place-items-center rounded-xl bg-brand text-sm font-black text-white shadow-md">VD</span>`

export type SiteSection = 'home' | 'learn' | 'play' | 'multiplayer' | 'multiDuel' | 'placement' | 'levels' | 'howToPlay' | 'about' | 'privacy' | 'terms'

const shellCopy: Record<AppLanguage, {
  skip: string
  menu: string
  navigation: string
  language: string
  items: readonly [SiteSection, string][]
  footer: readonly [SiteSection, string][]
  description: string
}> = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navigation: 'Primary navigation', language: 'Language',
    items: [['home', 'Home'], ['learn', 'Learn'], ['play', 'Play'], ['multiplayer', 'Duel'], ['multiDuel', 'Multi Duel'], ['levels', 'Levels']],
    footer: [['howToPlay', 'How to play'], ['about', 'About'], ['privacy', 'Privacy'], ['terms', 'Terms']],
    description: 'Learn British English vocabulary with clear definitions, pronunciation, examples and focused games.',
  },
  ms: {
    skip: 'Langkau ke kandungan', menu: 'Menu', navigation: 'Navigasi utama', language: 'Bahasa',
    items: [['home', 'Utama'], ['learn', 'Belajar'], ['play', 'Main'], ['multiplayer', 'Duel'], ['multiDuel', 'Multi Duel'], ['levels', 'Tahap']],
    footer: [['howToPlay', 'Cara bermain'], ['about', 'Tentang'], ['privacy', 'Privasi'], ['terms', 'Terma']],
    description: 'Pelajari kosa kata Bahasa Inggeris British dengan penerangan, sebutan, contoh Bahasa Melayu dan permainan yang fokus.',
  },
  zh: {
    skip: '跳至主要内容', menu: '菜单', navigation: '主导航', language: '语言',
    items: [['home', '首页'], ['learn', '学习'], ['play', '练习'], ['multiplayer', '双人对战'], ['multiDuel', '多人对战'], ['levels', '等级']],
    footer: [['howToPlay', '玩法说明'], ['about', '关于'], ['privacy', '隐私'], ['terms', '条款']],
    description: '通过简体中文讲解、英式发音、例句和专注练习学习英式英语词汇。',
  },
}

const routeForSection = (section: SiteSection): string => SITE.routes[section]

function languageSwitcher(language: AppLanguage): string {
  const currentRoute = typeof location === 'undefined' ? '/' : location.pathname
  const basePath = import.meta.env.BASE_URL
  const routeWithinBase = basePath !== '/' && currentRoute.startsWith(basePath)
    ? `/${currentRoute.slice(basePath.length)}`
    : currentRoute
  const options = (['ms', 'en', 'zh'] as const).map((option) => {
    const target = `${basePath}${languagePath(routeWithinBase, option).replace(/^\/+/, '')}`
    return `<option value="${target}" lang="${option === 'ms' ? 'ms-MY' : option === 'en' ? 'en-GB' : 'zh-Hans'}"${option === language ? ' selected' : ''}>${LANGUAGE_NAMES[option]}</option>`
  }).join('')
  return `<label class="language-switcher"><span class="sr-only">${shellCopy[language].language}</span><span class="language-switcher-icon" aria-hidden="true">🌐</span><select data-language-switcher aria-label="${shellCopy[language].language}">${options}</select></label>`
}

export function siteHeader(active: SiteSection): string {
  const language = currentLanguage()
  const copy = shellCopy[language]
  return `<a class="skip-link" href="#main-content">${copy.skip}</a>
  <header class="app-header border-b border-black/5 bg-white/80 backdrop-blur-lg">
    <div class="app-header-inner page-wrap flex min-h-18 items-center justify-between gap-4">
      <a href="${SITE.routes.home}" class="flex items-center gap-2.5 font-extrabold tracking-tight" ${active === 'home' ? 'aria-current="page"' : ''}>${mark}<span class="brand-name">${SITE.name.slice(0, 5)}<span class="text-brand">${SITE.name.slice(5)}</span></span></a>
      <button class="app-menu-button" type="button" data-app-menu-button aria-expanded="false" aria-controls="app-primary-navigation"><span aria-hidden="true">☰</span><span>${copy.menu}</span></button>
      <nav id="app-primary-navigation" class="app-nav" aria-label="${copy.navigation}"><ul class="flex items-center gap-1 sm:gap-2">${copy.items.map(([id, label]) => {
        const current = active === id || (active === 'placement' && id === 'levels')
        return `<li${id === 'home' ? ' class="desktop-home-nav-item"' : ''}><a href="${routeForSection(id)}" ${current ? 'aria-current="page"' : ''} class="app-nav-link rounded-xl px-3 py-2 text-sm font-bold ${current ? 'bg-brand-soft text-brand-dark' : 'text-muted hover:bg-slate-100 hover:text-ink'}">${label}</a></li>`
      }).join('')}</ul>${languageSwitcher(language)}</nav>
    </div>
  </header>`
}

export function siteFooter(): string {
  const language = currentLanguage()
  const copy = shellCopy[language]
  return `<footer class="mt-20 border-t border-black/5 bg-white"><div class="page-wrap grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><div class="mb-3 flex items-center gap-2 font-extrabold">${mark}<span>${SITE.name}</span></div><p class="max-w-lg text-sm leading-6 text-muted">${copy.description}</p></div><div>${languageSwitcher(language)}<nav aria-label="Footer navigation" class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted">${copy.footer.map(([id, label]) => `<a href="${routeForSection(id)}">${label}</a>`).join('')}</nav></div></div></footer>`
}
