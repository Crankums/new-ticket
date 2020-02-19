class App {
    constructor() {
        this.customerContainer = document.querySelector('#customer-container')
        this.ticketContainer = document.querySelector('#ticket-container')
        this.customerAdapter = new CustomersAdapter
        this.TicketsAdapter = new TicketsAdapter
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
        const ul = document.createElement('ul')
        ul.setAttribute('id', 'ticket-list')
        this.ticketContainer.appendChild(ul)
        ul.innerHTML = `${this.currentCustomer.tickets.map(t => t.ticketLi()).join('')}`
    }

    ticketLisBindingsAndEventListeners(){
        const lis = this.ticketContainer.querySelectorAll('.ticket-min')
        for (let li of lis){
            li.addEventListener('click', this.handleShowingTicket.bind(this))
        }

    }

    toggle() {
        const selectedLi = e.target
        // if selectedLi class == ticket-min
        // handleShowingTicket, class = ticket-max
        // else
        // renders ticket-li, class ticket-min-max
        // end

    }

    handleShowingTicket(e){
        const selectedLi = e.target
        
        let selectTicketObj = this.currentCustomer.tickets.find(t => t.id === parseInt(selectedLi.dataset.id, 10))
        selectedLi.innerHTML = selectTicketObj.ticketHTML()
        const delBtns = document.querySelectorAll("#delBtn")
        for (let delBtn of delBtns) {
            delBtn.addEventListener('click', e=> this.deleteCustomerTickets(e))
        }
    }

    deleteCustomerTickets(e){
        e.stopPropagation()
        console.log("deleting customer")
        const params = e.target.dataset.id
        // convert to int
        this.ticketsAdapter.deleteTickets(params)
    }

    renderNewTicketForm(){

    }
}