export type FeedbackTone = 'info' | 'success' | 'error'

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

export function confirmAction(options: { title: string; message: string; confirmLabel: string; danger?: boolean }): Promise<boolean> {
  return new Promise((resolve) => {
    const dialog = document.createElement('dialog')
    dialog.setAttribute('aria-labelledby', 'dialog-title')
    dialog.innerHTML = `<form method="dialog" class="p-6"><h2 id="dialog-title" class="text-xl font-extrabold">${options.title}</h2><p class="mt-3 leading-7 text-muted">${options.message}</p><div class="mt-6 flex justify-end gap-3"><button class="button button-secondary" value="cancel">Cancel</button><button class="button ${options.danger ? 'bg-danger text-white' : 'button-primary'}" value="confirm">${options.confirmLabel}</button></div></form>`
    document.body.append(dialog)
    dialog.addEventListener('close', () => {
      resolve(dialog.returnValue === 'confirm')
      dialog.remove()
    }, { once: true })
    dialog.showModal()
  })
}
