window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

const openFormButton = document.querySelectorAll('.open__form')
const modalForm = document.getElementById('modal-form')
const checkFormButton = document.querySelector('.check__form')
const modalThanks = document.querySelector('#thanks-modal')
const closeFormButton = document.querySelectorAll('.close')
const closeModalThanks = document.querySelector('.cl-thanks')

//открытие формы
openFormButton.forEach(button => {
    button.addEventListener('click', () => {
        modalForm.showModal()
    })
})

//закрытие формы по крестику
closeFormButton.forEach(span => {
    span.addEventListener('click', () => {
        if (modalForm.open) {
            modalForm.close()
        } else if (modalThanks.open) {
            modalThanks.close()
        }
    })
})

//валидация
checkFormButton.addEventListener('click', (event) => {
    event.preventDefault()
    
    modalForm.close()
    modalThanks.showModal()
})

//закрытие диалогового окна
closeModalThanks.addEventListener('click', (event) => {
    event.preventDefault()

    modalThanks.close()
})