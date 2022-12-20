const modal = document.querySelector('dialog')
const open_modal = document.querySelector('#sobre-modal')
const close_modal = document.createElement('button')
modal.appendChild(close_modal).innerHTML = 'fechar'.toUpperCase()



open_modal.addEventListener('click', (e) => {
    modal.showModal()
})
close_modal.onclick = () => {
    modal.close()
}

