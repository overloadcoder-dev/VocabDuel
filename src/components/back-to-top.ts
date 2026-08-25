import { currentLanguage } from '../config/locale'

let installed = false

export function installBackToTop(): void {
  if (installed || !document.body) return
  installed = true

  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'back-to-top'
  button.hidden = true
  const language = currentLanguage()
  const label = language === 'ms' ? 'Kembali ke atas' : language === 'zh' ? '返回顶部' : 'Back to top'
  button.setAttribute('aria-label', label)
  button.title = label
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 14 7-7 7 7" /></svg>'
  document.body.append(button)

  let updatePending = false
  const updateVisibility = (): void => {
    updatePending = false
    button.hidden = window.scrollY < 250
  }
  const scheduleVisibilityUpdate = (): void => {
    if (updatePending) return
    updatePending = true
    window.requestAnimationFrame(updateVisibility)
  }

  window.addEventListener('scroll', scheduleVisibilityUpdate, { passive: true })
  window.addEventListener('pageshow', updateVisibility)
  button.addEventListener('click', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  })

  updateVisibility()
}
