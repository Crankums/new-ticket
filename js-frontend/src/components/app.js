class App {
    constructor() {
        this.customerContainer = document.querySelector('#customer-container')
        this.ticketContainer = document.querySelector('#ticket-container')
        this.ticketForm = document.querySelector('#form-container')
        this.customerAdapter = new CustomersAdapter
        this.TicketsAdapter = new TicketsAdapter
        this.currentCustomer
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
        const formBtn = document.createElement('button')
        formBtn.setAttribute('id', 'form-button')
        formBtn.innerText= "Create New Ticket"
        this.ticketForm.appendChild(formBtn)
        formBtn.addEventListener('click', this.renderNewTicketForm.bind(this))
        // attach to top of container, add eventlistener to fire form
        const ul = document.createElement('ul')
        ul.setAttribute('id', 'ticket-list')
        this.ticketContainer.appendChild(ul)
        ul.innerHTML = `${this.currentCustomer.tickets.map(t => t.ticketLi()).join('')}`
    }
    renderNewTicketForm(){  
        this.ticketFormInputs = new Form(this.currentCustomer)
        this.ticketForm.innerHTML = this.ticketFormInputs.newTicketInputHTML()
        this.newTckBtn = document.querySelector('#newTckBtn')
        this.newTckBtn.addEventListener('click', this.ticketFormInputs.handleClick.bind(this.ticketFormInputs))
    }


    ticketLisBindingsAndEventListeners(){
        const lis = this.ticketContainer.querySelectorAll('.ticket-min')
        for (let li of lis){
            li.addEventListener('click', this.handleShowingTicket.bind(this))
        }

    }

    toggle(e) {
        const selectedLi = e.target
        if (selectedLi.className === "ticket-min"){
            this.handleShowingTicket(e)
        }
        else {
            this.handleHidingTicket(e)
        }
    }
    handleHidingTicket(e){

    }
    handleShowingTicket(e){
        const selectedLi = e.target
        let selectTicketObj = this.currentCustomer.tickets.find(t => t.id === parseInt(selectedLi.dataset.id, 10))
        selectedLi.innerHTML = selectTicketObj.ticketHTML()
        const delBtns = document.querySelectorAll("#delBtn")
        for (let delBtn of delBtns) {
            delBtn.addEventListener('click', this.deleteCustomerTickets.bind(this))
        }
    }

    deleteCustomerTickets(e){
        e.stopPropagation()
        console.log("deleting customer")
        const params = e.target.dataset.id
        // convert to int
        this.ticketsAdapter.deleteTickets(params)
    }
}