export type FeedbackTone = 'info' | 'success' | 'error'
type ConfirmMetricTone = 'brand' | 'success' | 'warning'
type ConfirmMetric = { label: string; value: string; tone?: ConfirmMetricTone }
type ConfirmActionOptions = { title: string; message: string; confirmLabel: string; danger?: boolean; eyebrow?: string; metrics?: readonly ConfirmMetric[] }
let dialogSequence = 0

const escapeHtml = (value: string): string => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]!)

export function announce(message: string, tone: FeedbackTone = 'info'): void {
  document.querySelector('.toast')?.remove()
  const toast = document.createElement('div')
  toast.className = 'toast'
  toast.dataset.tone = tone
  toast.setAttribute('role', tone === 'error' ? 'alert' : 'status')
  toast.textContent = message
  document.body.append(toast)
  window.setTimeout(() => toast.remove(), 3600)
}

export function confirmAction(options: ConfirmActionOptions): Promise<boolean> {
  return new Promise((resolve) => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : undefined
    const dialog = document.createElement('dialog')
    const sequence = ++dialogSequence
    const titleId = `dialog-title-${sequence}`
    const descriptionId = `dialog-description-${sequence}`
    const hasMetrics = Boolean(options.metrics?.length)
    dialog.setAttribute('aria-labelledby', titleId)
    dialog.setAttribute('aria-describedby', descriptionId)
    dialog.className = 'confirm-dialog'
    dialog.toggleAttribute('data-has-metrics', hasMetrics)
    if (options.danger) dialog.setAttribute('role', 'alertdialog')
    const metrics = options.metrics?.map((metric) => `<li class="confirm-metric" data-tone="${metric.tone ?? 'brand'}"><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span></li>`).join('') ?? ''
    const icon = hasMetrics
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V10m7 9V5m7 14v-6"/><path d="M3 19h18"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5m0 3.5v.01"/><path d="M10.3 3.8 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"/></svg>'
    dialog.innerHTML = `<form method="dialog" class="confirm-dialog-form"><div class="confirm-dialog-heading"><span class="confirm-dialog-icon">${icon}</span><div>${options.eyebrow ? `<p class="confirm-dialog-eyebrow">${escapeHtml(options.eyebrow)}</p>` : ''}<h2 id="${titleId}">${escapeHtml(options.title)}</h2></div></div>${metrics ? `<ul class="confirm-metrics" aria-label="Progress summary">${metrics}</ul>` : ''}<div id="${descriptionId}" class="confirm-dialog-message"${options.danger ? ' data-danger' : ''}><span aria-hidden="true">!</span><p>${escapeHtml(options.message)}</p></div><div class="confirm-dialog-actions"><button class="button button-secondary" value="cancel" autofocus>Cancel</button><button class="button ${options.danger ? 'button-danger' : 'button-primary'}" value="confirm">${escapeHtml(options.confirmLabel)}</button></div></form>`
    document.body.append(dialog)
    dialog.addEventListener('close', () => {
      resolve(dialog.returnValue === 'confirm')
      dialog.remove()
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true })
    }, { once: true })
    dialog.showModal()
  })
}

export function showAlertDialog(options: { title: string; message: string; buttonLabel?: string }): Promise<void> {
  return new Promise((resolve) => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : undefined
    const dialog = document.createElement('dialog')
    const sequence = ++dialogSequence
    const titleId = `dialog-title-${sequence}`
    const descriptionId = `dialog-description-${sequence}`
    const form = document.createElement('form')
    const title = document.createElement('h2')
    const description = document.createElement('p')
    const actions = document.createElement('div')
    const closeButton = document.createElement('button')

    dialog.setAttribute('role', 'alertdialog')
    dialog.setAttribute('aria-labelledby', titleId)
    dialog.setAttribute('aria-describedby', descriptionId)
    form.method = 'dialog'
    form.className = 'p-6'
    title.id = titleId
    title.className = 'text-center text-xl font-extrabold'
    title.textContent = options.title
    description.id = descriptionId
    description.className = 'mt-3 text-center leading-7 text-muted'
    description.textContent = options.message
    actions.className = 'mt-6 flex justify-center'
    closeButton.className = 'button button-primary'
    closeButton.value = 'close'
    closeButton.textContent = options.buttonLabel ?? '我知道了'
    actions.append(closeButton)
    form.append(title, description, actions)
    dialog.append(form)
    document.body.append(dialog)
    dialog.addEventListener('close', () => {
      dialog.remove()
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true })
      resolve()
    }, { once: true })
    dialog.showModal()
  })
}
