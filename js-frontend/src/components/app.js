class App {
    constructor() {
        this.customerContainer = document.querySelector('#customer-container')
        this.ticketContainer = document.querySelector('#ticket-container')
        this.ticketForm = document.querySelector('#form-container')
        this.customerAdapter = new CustomersAdapter
        this.ticketsAdapter = new TicketsAdapter
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
        const sortBtn = document.createElement('button')
        sortBtn.setAttribute('id', 'sort-button')
        sortBtn.innerText= "Sort Tickets Z-A"
        this.ticketForm.appendChild(sortBtn)
        sortBtn.addEventListener('click', this.sortTickets.bind(this))
        const ul = document.createElement('ul')
        ul.setAttribute('id', 'ticket-list')
        this.ticketContainer.appendChild(ul)
        ul.innerHTML = `${this.currentCustomer.tickets.map(t => t.ticketLi()).join('')}`
    }

    // sortTcktBtn(){
    //     const sortBtn = document.createElement('button')
    //     sortBtn.setAttribute('id', 'sort-button')
    //     sortBtn.innerText= "Sort Tickets Z-A"
    //     this.ticketForm.appendChild(sortBtn)
    //     sortBtn.addEventListener('click', this.sortTickets.bind(this))
    // }

    sortTickets(){
        const ul = this.ticketContainer.querySelector('ul')
        this.currentCustomer.tickets.sort((a, b) => b.id-a.id)
        ul.innerHTML =`${this.currentCustomer.tickets.map(t => t.ticketLi()).join('')}`
        this.ticketLisBindingsAndEventListeners()
    }

    renderNewTicketForm(){  
        this.ticketFormInputs = new Form
        this.ticketForm.innerHTML = this.ticketFormInputs.newTicketInputHTML()
        this.crtTckBtn = document.querySelector('#crtTckBtn')
        this.crtTckBtn.addEventListener('click', this.handleCreateNewTicket.bind(this))
    }


    ticketLisBindingsAndEventListeners(){
        const lis = this.ticketContainer.querySelectorAll('.ticket-min')
        for (let li of lis){
            li.addEventListener('click', this.toggle.bind(this))
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
        const selectedLi = e.target
        let selectTicketObj = this.currentCustomer.tickets.find(t => t.id === parseInt(selectedLi.parentElement.dataset.id, 10))
        selectedLi.parentElement.innerHTML = selectTicketObj.ticketLi()
        selectedLi.className = 'ticket-min'
    }

    handleShowingTicket(e){
        const selectedLi = e.target
        let selectTicketObj = this.currentCustomer.tickets.find(t => t.id === parseInt(selectedLi.dataset.id, 10))
        selectedLi.innerHTML = selectTicketObj.ticketHTML()
        const delBtns = document.querySelectorAll("#delBtn")
        for (let delBtn of delBtns) {
            delBtn.addEventListener('click', this.deleteCustomerTickets.bind(this))
        }
        selectedLi.className = 'ticket-max'
    }

    deleteCustomerTickets(e){
        const selectedLi = e.target.parentElement
        e.stopPropagation()
        console.log("deleting ticket")
        const params = parseInt(selectedLi.dataset.id)
        this.ticketsAdapter.deleteTickets(params)
        selectedLi.innerHTML = (`Ticket Deleted!`)
    }

    handleCreateNewTicket(e){
        this.newTicketInput = document.querySelector('#new-ticket-input')
        const newParts = this.newTicketInput.children[0].value
        const newLabor = this.newTicketInput.children[1].value
        const newPrice = this.newTicketInput.children[2].value
        const ticket = {
            parts: newParts,
            labor: newLabor,
            price: newPrice,
            customer_id: this.currentCustomer.id
        }
        this.ticketsAdapter.createTickets(ticket)
        .then(this.newTicketInput.remove())
        this.refreshCustomerTickets()
    } 

    refreshCustomerTickets(){
        const ul = document.querySelector('#ticket-list')
        ul.remove()
        const params = {
            name: this.currentCustomer.name,
            email: this.currentCustomer.email
        }
        this.customerAdapter.fetchCustomer(params)
        .then(jobj => {
            this.currentCustomer = new Customer(jobj),
            this.renderCustomerTickets(),
            this.ticketLisBindingsAndEventListeners()
        })
        .catch(error => console.log(error))
    }

}