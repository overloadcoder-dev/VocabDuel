import { siteFooter, siteHeader, type SiteSection } from '../components/site-shell'

const routeSections: Record<string, SiteSection> = {
  '/levels/': 'levels',
  '/how-to-play/': 'howToPlay',
  '/about/': 'about',
  '/privacy/': 'privacy',
  '/terms/': 'terms',
}

const active = Object.entries(routeSections).find(([route]) => location.pathname.endsWith(route))?.[1] ?? 'home'
document.querySelector('body > .skip-link')?.remove()
const staticHeader = document.querySelector<HTMLElement>('body > .site-header')
if (staticHeader) staticHeader.outerHTML = siteHeader(active)
const staticFooter = document.querySelector<HTMLElement>('body > .site-footer')
if (staticFooter) staticFooter.outerHTML = siteFooter()

const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]')
const menu = document.querySelector<HTMLElement>('[data-menu]')

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
    menuButton.setAttribute('aria-expanded', String(!isOpen))
    menu.hidden = isOpen
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      menu.hidden = true
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.focus()
    }
  })
}

document.querySelectorAll<HTMLElement>('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear())
})
