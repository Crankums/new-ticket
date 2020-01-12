class Form {
    constructor() {
        this.currentTicket = false
        this.ticketAdapter = new ticketAdapter
    }
    formBindingsAndEventListeners(){
        this.ticketForm = document.querySelector("#ticket-form")
        this.serviceInput = document.querySelector("#service-input")
    }
    renderTicketForm() {
        const ticketForm = document.createElement("div")
        const ticketBtn = document.createElement("button")
        ticketForm.setAttribute('id', 'ticket-form')
        ticketBtn.setAttribute("form", "service-input")
        ticketBtn.setAttribute("value", "Add to Ticket")
        ticketForm.innerHTML = serviceInputHTML()
        ticketForm.appendChild(ticketBtn)
        ticketBtn.onclick(this.handleClick)
    }   

    serviceInputHTML(){
        return (`
            <form id="service-input">
                <input type="text" name="service-item" id="service-item">
                <input type="number" name="service-price" id="service-price">
            </form>
        `)
    }

    handleClick(e){
        const serviceItem = this.serviceInput.children[0].value
        const servicePrice = this.serviceInput.children[1].value
        const params = {
            service: serviceItem,
            price: servicePrice
        }
        if (this.currentTicket) {
            this.ticketAdapter.updateTicket(params)
        } else {
            this.ticketAdapter.createTicket(params)
        } 
        this.ticketForm.appendChild(this.serviceInputHTML)
        const submit = document.createElement("submit")
        submit.setAttribute(id= "save-ticket")


        // send post request through ticketsAdaptor to Ticket db
        // if ticket already exists, adds to current ticket
        // add contents of ticket
        
        // post an empty line of inputs
        // then add submit button to save and finish ticket
    } 


}


