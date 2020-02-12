class App {
    constructor() {
        this.customerContainer = document.querySelector('#customer-container')
        this.ticketContainer = document.querySelector('#ticket-container')
        this.customerAdapter = new CustomersAdapter
        this.currentCustomer
        this.ticketFormInputs = new Form
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.formContainer = document.querySelector('#customer-form')
        this.custBtn = this.formContainer.querySelector("button")
        this.custBtn.addEventListener('click', this.handleCustomerSubmit.bind(this))
    }

    handleCustomerSubmit(e) {
        // e.preventDefault()
        const inputs = this.formContainer.querySelectorAll("input")
        const customerName = inputs[0].value
        const customerEmail = inputs[1].value
        const params = {
            name: customerName,
            email: customerEmail
        }
        this.customerAdapter.fetchCustomer(params)
        .then(jobj => {
            this.currentCustomer = new Customer(jobj)
            this.renderCurrentCustomer()
        })        
    }

    renderCurrentCustomer(){
        this.customerContainer.innerHTML = this.currentCustomer.customerInfoHTML()
        // append(this.currentCustomer.customerInfoHTML())
    
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