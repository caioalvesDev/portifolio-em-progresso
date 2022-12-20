const modal = document.querySelector('dialog')
const open_modal = document.querySelector('#sobre-modal')
const close_modal = document.querySelector('[type="button"]')
// modal.appendChild(close_modal).innerHTML = 'fechar'.toUpperCase()

open_modal.addEventListener('click', (e) => {
    modal.showModal()
})
close_modal.addEventListener('click', (e) => {
    modal.close()
})

