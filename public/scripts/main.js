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
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'
  // Change <h2>
  modalTitle.innerHTML = `${text} esta pergunta`

  // Change <p>
  modalDescription.innerHTML = `Deseja ${text.toLocaleLowerCase()} esta pergunta?`

  // Change Button
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

  // Remove Class red
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // Abrir Modal
  modal.open()
}

// ===#=== Parei no minuto 1:40h da Aula 04 ===#===
