class Form {
    constructor() {
        
    }

    renderInputs() {
        let formContainer = document.createElement(div)
// 2 ways to do this: 
// 1. Create each element individually and set their attributes
// 2. Create an iterator 
        for (let key in object) {
            let input =  document.createElement('input')
            input.id = `${key}`
            formContainer.appendChild('input')
        }   

    }

    renderForm() {
        this.renderInputs()
        let submit = document.createElement('submit')
        submit.setAttribute('value', 'Submit Ticket')
        formContainer.appendChild('submit')
    }
}


