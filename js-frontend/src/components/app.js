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
            this.renderCustomerTickets()
            this.ticketLisBindingsAndEventListeners()
        })        
    }

    renderCurrentCustomer(){
        this.customerContainer.innerHTML = this.currentCustomer.customerInfoHTML()
        // append(this.currentCustomer.customerInfoHTML())
    
    }

    renderCustomerTickets(){
        this.ticketContainer.innerHTML = `
        ${this.currentCustomer.tickets.map(t => t.ticketLi())}
        `  
    }

    ticketLisBindingsAndEventListeners(){
        const lis = this.ticketContainer.querySelectorAll('.ticket-min')
        for (let li of lis){
        li.addEventListener('click', this.handleShowingTicket.bind(this))
        }

    }

    handleShowingTicket(e){
        const selectedLi = e.target
        let selectTicketObj = this.currentCustomer.tickets.find(t => t.id === parseInt(selectedLi.dataset.id, 10))
        selectedLi.innerHTML = selectTicketObj.ticketHTML()
        const newButton = document.createElement('button')
        newButton.innerText ="Delete Ticket"
        newButton.addEventListener('click', e => this.deleteCustomerTickets(e))
        this.ticketContainer.appendChild(newButton)
    }

    deleteCustomerTickets(e){

    }
}