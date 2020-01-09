class App {
    constructor() {
        this.customerContainer = document.querySelector('customer-container')
        this.ticketContainer = document.querySelector('ticket-container')
        this.customerAdapter = new CustomersAdapter
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
        const params = {
            name: customerName,
            email: customerEmail
        }

        this.customerAdapter.fetchCustomer(params)
        .then(jobj => this.currentCustomer = new Customer(jobj))

        
    }
}