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
