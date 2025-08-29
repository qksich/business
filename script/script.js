window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 50) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

const openFormButton = document.querySelectorAll('.open__form') // кнопка откр. форму
const modalForm = document.getElementById('modal-form') //модуль с формой 
const form = document.getElementById('form') // форма
const checkFormButton = document.querySelector('.check__form') // кнопка в форме
const modalThanks = document.querySelector('#thanks-modal') // второй модуль
const closeFormButton = document.querySelectorAll('.close') // кнопки закрывающие форму
const closeModalThanks = document.querySelector('.cl-thanks') // кнопка во втором модуле
const errorMessage = document.querySelectorAll('.field__errors')

//открытие формы
openFormButton.forEach(button => {
    button.addEventListener('click', () => {
        modalForm.showModal()
        modalForm.focus()
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

const formValidate = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let isValid = true

        form.querySelectorAll('.check').forEach(input => {
            if (input.value.trim() === '') {
                isValid = false
                input.style.border = '1px red solid'
                
            } else {
                input.style.border = '1px #F1F1F1 solid'
                
            }
        })
        form.querySelectorAll('.field__errors').forEach(span => {
            if (!isValid) {
                span.style.display = 'block'
            } else {
                span.style.display = 'none'
                modalForm.close()
                modalThanks.showModal()
            }
        })
        
    })
}



checkFormButton.addEventListener('click', (event) => {
    formValidate()
    
})

//закрытие диалогового окна
closeModalThanks.addEventListener('click', (event) => {
    event.preventDefault()

    modalThanks.close()
})


// валидация формы











/*
class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }

    errorMessages() {
        valueMissing: 'This field is required.'
    }

    constructor() {
        this.bindEvents()
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity
        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, errorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(errorMessage)
            }
        })

        console.log(errorMessages)
        
    }

    onBlur(event) { // проверка что событие на эл. внутри формы
        const { target } = event
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if (isFormField && isRequired) {
            this.validateField(target)

        }
    }

    bindEvents() {// привязка слушателей к document
        document.addEventListener('blur', (event) => {
            this.onBlur(event)
        }, {capture: true} )
    }
}

new FormsValidation()*/