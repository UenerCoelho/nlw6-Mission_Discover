import Modal from './modal.js'

const modal = Modal()

// Pegar todos os botões que existem com a class check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', event => {
    // Open Modal
    modal.open()
  })
})

// ===#=== Parei no minuto 01:15h da aula 04 ===#===
