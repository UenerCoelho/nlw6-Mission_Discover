import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Funcionalidade de Marcar como Lido
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', handleClick)
})

// Funcionalidade de Excluir
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  // Escutar o click do excluir
  button.addEventListener('click', event => handleClick(event, (check = true)))
})

function handleClick(event, check = true) {
  modalTitle.innerHTML = check ? 'Marcar como lido?' : 'Excluir essa pergunta?'
  // Abrir Modal
  modal.open()
}

// ===#=== Parei no minuto 1:400h da Aula 04 ===#===
