class Form {
    constructor() {
        this.currentTicket = false
        this.ticketAdapter = new TicketsAdapter
    }


    formBindingsAndEventListeners(){
        this.ticketForm = document.querySelector("#ticket-form")
        this.newTicketInput = document.querySelector("#new-ticket-input")
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
                <p>Parts: <input type="text" name="new-ticket-parts" id="new-ticket-parts"></p>
                <p>Labor: <input type="text" name="new-ticket-labor" id="new-ticket-labor"></p>
                <p>Price: <input type="number" name="new-ticket-price" id="new-ticket-price"></p>
                <button type="button" id="newTckBtn">Create New Ticket</button>
            </form>
        `)
    }

    handleClick(e){
        const newParts = this.newTicketInput.children[0].value
        const newLabor = this.newTicketInput.children[1].value
        const newPrice = this.newTicketInput.children[2].value
        const params = {
            labor: newLabor,
            price: newParts,
            price: newPrice
        }
        if (this.currentTicket) {
            this.ticketAdapter.updateTicket(params)
        } else {
            this.ticketAdapter.createTicket(params)
            this.currentTicket = true
            const submit = document.createElement("submit")
            submit.setAttribute(id= "save-ticket")
            submit.setAttribute(value = "Save Ticket")
        } 
        this.ticketForm.appendChild(this.laborInputHTML)
        this.ticketForm.appendChild(submit)

        // send post request through ticketsAdaptor to Ticket db
        // if ticket already exists, adds to current ticket
        // add contents of ticket
        
        // post an empty line of inputs
        // then add submit button to save and finish ticket
    } 


}


