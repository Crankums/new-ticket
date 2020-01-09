class App {
    constructor() {
        this.customerContainer = document.querySelector('customer-container')
        this.ticketContainer = document.querySelector('ticket-container')
        this.customerAdapter = new CustomerAdapter
        this.currentCustomer
        initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.form = document.querySelector('customer-form')
        this.form.addEventListener('submit', this.handleCustomerSubmit.bind(this))
    }

    handleCustomerSubmit(e) {
        e.preventDefault()
        const customerName = this.form.children[0].value
        const customerEmail = this.form.children[1].value

    }
}