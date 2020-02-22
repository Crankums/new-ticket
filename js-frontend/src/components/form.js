class Form {
    constructor(customerObj) {
        this.currentCustomer = customerObj
        this.ticketContainer = document.querySelector('#ticket-container')
        this.ticketForm = document.querySelector('#form-container')
        this.currentTicket = false
        this.ticketAdapter = new TicketsAdapter
        this.formBindingsAndEventListeners()
    }


    formBindingsAndEventListeners(){
        this.custCont = document.querySelector("#customer-container")
        // this.newTicketInput = document.querySelector("#new-ticket-input")
    }
    // renderTicketForm() {
    //     const ticketForm = document.createElement("div")
    //     const ticketBtn = document.createElement("button")
    //     ticketForm.setAttribute('id', 'ticket-form')
    //     ticketBtn.setAttribute("form", "labor-input")
    //     ticketBtn.setAttribute("value", "Add to Ticket")
    //     ticketForm.innerHTML = laborInputHTML()
    //     ticketForm.appendChild(ticketBtn)
    //     ticketBtn.onclick(this.handleClick)
    // }   

    newTicketInputHTML(){
        return (`
            <form id="new-ticket-input" class="new-ticket-form">
            Parts: <input type="text" name="new-ticket-parts" id="new-ticket-parts">
            Labor: <input type="text" name="new-ticket-labor" id="new-ticket-labor">
            Price: <input type="number" name="new-ticket-price" id="new-ticket-price">
                <button type="button" id="newTckBtn">Create New Ticket</button>
            </form>
        `
        )
    }

    handleClick(e){
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
        debugger
        this.ticketAdapter.createTickets(ticket)

        // send post request through ticketsAdaptor to Ticket db
        // if ticket already exists, adds to current ticket
        // add contents of ticket
        
        // post an empty line of inputs
        // then add submit button to save and finish ticket
    } 


}


