import '../styles/main.css'
import { siteFooter, siteHeader } from '../components/site-shell'

document.querySelector('#site-header')!.innerHTML = siteHeader('home')
document.querySelector('#site-footer')!.innerHTML = siteFooter()

const options = [...document.querySelectorAll<HTMLButtonElement>('#preview-options button')]
const feedback = document.querySelector<HTMLParagraphElement>('#preview-feedback')!
options.forEach((option) => option.addEventListener('click', () => {
  if (options.some((item) => item.disabled)) return
  options.forEach((item) => {
    item.disabled = true
    if (item.dataset.correct) item.dataset.state = 'correct'
  })
  if (option.dataset.correct) {
    feedback.textContent = '✓ Correct — reluctant means 不情愿的。'
    feedback.className = 'mt-4 min-h-6 text-center text-sm font-bold text-success'
  } else {
    option.dataset.state = 'wrong'
    feedback.textContent = '✕ Not quite. The correct answer is 不情愿的。'
    feedback.className = 'mt-4 min-h-6 text-center text-sm font-bold text-danger'
  }
  window.setTimeout(() => {
    options.forEach((item) => { item.disabled = false; delete item.dataset.state })
    feedback.textContent = 'Try it again, or start a full practice round.'
    feedback.className = 'mt-4 min-h-6 text-center text-sm font-bold text-muted'
  }, 2600)
}))
