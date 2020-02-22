class Form {
    constructor(customerObj) {
        this.ticketContainer = document.querySelector('#ticket-container')
        this.ticketForm = document.querySelector('#form-container')
        this.currentTicket = false
        this.ticketAdapter = new TicketsAdapter
        this.formBindingsAndEventListeners()
    }


    formBindingsAndEventListeners(){
        this.custCont = document.querySelector("#customer-container")
        this.ticketUL = document.querySelector("#ticket-list")
    }
    

    newTicketInputHTML(){
        return (`
            <form id="new-ticket-input" class="new-ticket-form">
            Parts: <input type="text" name="new-ticket-parts" id="new-ticket-parts">
            Labor: <input type="text" name="new-ticket-labor" id="new-ticket-labor">
            Price: <input type="number" name="new-ticket-price" id="new-ticket-price">
                <button type="button" id="crtTckBtn">Create New Ticket</button>
            </form>
        `)
    }
}


