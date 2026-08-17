import { SITE } from '../config'
import { installBackToTop } from './back-to-top'
import { installPageTransitions } from './page-transition'

installPageTransitions()
installBackToTop()

const mark = `<span aria-hidden="true" class="grid size-9 place-items-center rounded-xl bg-brand text-sm font-black text-white shadow-md">VD</span>`

export type SiteSection = 'home' | 'learn' | 'play' | 'multiplayer' | 'multiDuel' | 'placement' | 'levels' | 'howToPlay' | 'about' | 'privacy' | 'terms'

export function siteHeader(active: SiteSection): string {
  const items = [
    ['home', SITE.routes.home, 'Home'],
    ['learn', SITE.routes.learn, 'Learn'],
    ['play', SITE.routes.play, 'Play'],
    ['multiplayer', SITE.routes.multiplayer, 'Duel'],
    ['multiDuel', SITE.routes.multiDuel, 'Multi Duel'],
    ['levels', SITE.routes.levels, 'Levels'],
  ] as const
  return `<a class="skip-link" href="#main-content">Skip to content</a>
  <header class="app-header border-b border-black/5 bg-white/80 backdrop-blur-lg">
    <div class="app-header-inner page-wrap flex min-h-18 items-center justify-between gap-4">
      <a href="${SITE.routes.home}" class="flex items-center gap-2.5 font-extrabold tracking-tight" ${active === 'home' ? 'aria-current="page"' : ''}>${mark}<span class="brand-name">${SITE.name.slice(0, 5)}<span class="text-brand">${SITE.name.slice(5)}</span></span></a>
      <nav class="app-nav" aria-label="Primary navigation"><ul class="flex items-center gap-1 sm:gap-2">${items.map(([id, href, label]) => {
        const current = active === id || (active === 'placement' && id === 'levels')
        return `<li${id === 'home' ? ' class="desktop-home-nav-item"' : ''}><a href="${href}" ${current ? 'aria-current="page"' : ''} class="app-nav-link rounded-xl px-3 py-2 text-sm font-bold ${current ? 'bg-brand-soft text-brand-dark' : 'text-muted hover:bg-slate-100 hover:text-ink'}">${label}</a></li>`
      }).join('')}</ul></nav>
    </div>
  </header>`
}

export function siteFooter(): string {
  return `<footer class="mt-20 border-t border-black/5 bg-white"><div class="page-wrap grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><div class="mb-3 flex items-center gap-2 font-extrabold">${mark}<span>${SITE.name}</span></div><p class="max-w-lg text-sm leading-6 text-muted">${SITE.description}</p></div><nav aria-label="Footer navigation" class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted"><a href="${SITE.routes.howToPlay}">How to play</a><a href="${SITE.routes.about}">About</a><a href="${SITE.routes.privacy}">Privacy</a><a href="${SITE.routes.terms}">Terms</a></nav></div></footer>`
}
