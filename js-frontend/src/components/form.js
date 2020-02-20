class Form {
    constructor() {
        this.currentTicket = false
        this.ticketAdapter = new TicketsAdapter
        // this.formsAdapter = new FormsAdapter
    }


    formBindingsAndEventListeners(){
        this.ticketForm = document.querySelector("#ticket-form")
        this.laborInput = document.querySelector("#labor-input")
    }
    renderTicketForm() {
        const ticketForm = document.createElement("div")
        const ticketBtn = document.createElement("button")
        ticketForm.setAttribute('id', 'ticket-form')
        ticketBtn.setAttribute("form", "labor-input")
        ticketBtn.setAttribute("value", "Add to Ticket")
        ticketForm.innerHTML = laborInputHTML()
        ticketForm.appendChild(ticketBtn)
        ticketBtn.onclick(this.handleClick)
    }   

    laborInputHTML(){
        return (`
            <form id="labor-input">
                <input type="text" name="labor-item" id="labor-item">
                <input type="number" name="labor-price" id="labor-price">
            </form>
        `)
    }

    handleClick(e){
        const laborItem = this.laborInput.children[0].value
        const laborPrice = this.laborInput.children[1].value
        const params = {
            labor: laborItem,
            price: laborPrice
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


