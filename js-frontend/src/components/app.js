class App {
    constructor() {
        this.customerContainer = document.querySelector('customer-container')
        this.ticketContainer = document.querySelector('ticket-container')
        this.customerAdapter = new CustomersAdapter
        this.currentCustomer
        this.initBindingsAndEventListeners()
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

    renderCurrentCustomer(){
        this.customerContainer.innerHTML = this.currentCustomer.customerInfoHTML()
    }

    ticketLisBindingsAndEventListeners(){
        const lis = this.ticketContainer.querySelectorAll('li')
        for (let li of lis) {
            li.addEventListener('click', this.handleShowingTicket.bind(this))
        }

    }

    handleShowingTicket(){
        // const selectedLi = 
        const selectTicketObj = this.currentCustomer.tickets.find(t => t.id)
        // this.ticketContainer.innerHTML = 
        const newButton = document.createElement('button')
        newButton.innerText
        newButton.addEventListener('click', e => this.renderCustomerTickets())
        this.ticketContainer.appendChild(newButton)
    }

    renderCustomerTickets(){
        this.ticketContainer.innerHTML = `
        <ul>
        ${this.currentCustomer.tickets.map(t => t.ticketLi())}
        </ul>
        <button id='new-ticket-button'> NAME </button>`
    }
}