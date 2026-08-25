const navigationDelayMs = 250

let installed = false
let navigationPending = false

function resetTransition(overlay: HTMLElement): void {
  navigationPending = false
  overlay.hidden = true
  overlay.removeAttribute('data-visible')
  document.body.removeAttribute('data-page-navigating')
}

function destinationForClick(event: MouseEvent): URL | null {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null
  const target = event.target
  if (!(target instanceof Element)) return null
  const link = target.closest<HTMLAnchorElement>('a[href]')
  if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download') || link.hasAttribute('data-no-page-loader')) return null

  const destination = new URL(link.href, location.href)
  if (!['http:', 'https:'].includes(destination.protocol) || destination.origin !== location.origin) return null
  const sameDocument = destination.pathname === location.pathname && destination.search === location.search
  if (sameDocument) return null
  return destination
}

export function installPageTransitions(): void {
  if (installed || !document.body) return
  installed = true

  let overlay = document.querySelector<HTMLElement>('#page-transition-loader')
  if (!overlay) {
    overlay = document.createElement('div')
    overlay.id = 'page-transition-loader'
    overlay.className = 'page-transition-loader'
    overlay.hidden = true
    overlay.setAttribute('role', 'status')
    overlay.setAttribute('aria-live', 'polite')
    overlay.setAttribute('aria-atomic', 'true')
    overlay.innerHTML = '<span class="page-transition-spinner" aria-hidden="true"></span><strong>正在载入下一页…</strong><small>VocabDuel</small>'
    document.body.append(overlay)
  }

  document.addEventListener('click', (event) => {
    if (navigationPending) {
      event.preventDefault()
      return
    }
    const destination = destinationForClick(event)
    if (!destination) return

    event.preventDefault()
    navigationPending = true
    overlay.hidden = false
    document.body.setAttribute('data-page-navigating', '')
    window.requestAnimationFrame(() => overlay.setAttribute('data-visible', ''))
    window.setTimeout(() => location.assign(destination.href), navigationDelayMs)
  })

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) resetTransition(overlay)
  })
}
