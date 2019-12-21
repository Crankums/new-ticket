class Tickets {
    constructor() {
        this.tickets = []
        this.adapter = new TicketsAdapter
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTickets()
    }

    initBindingsAndEventListeners() {
        this.ticketContainer = document.getElementById('new-ticket-container')
        this.ticketForm = document.getElementById('new-ticket-form')
        this.body = document.querySelector('body')
        
    }

    findOrCreateCustomer(e) {
        e.preventDefault()
    }

    /*if findCustomer => getCustomer(){
        return customer.name === inputValue.name
    } else {
        createCustomer(inputValues)  {
            return customer
        }
    } <--this then sets who the customer is. we can do something similar re the bike */

    /*  fetchCustomerBikes(){
            fetch() {return bikes array or undefined}
            
    }
        createBikeDropdown(bikeArray){
            let dropdown = document.createElement("dropdown")
            iterate bikeArray to populate dropdown 
            append just below contact block
        }
    
    renderForm() {

    }




    /* render completed ticket in its own div, justified right. each list item is given its own checkbox.
    div id: rendered-ticket
        div contact-block
        /div
        div bike-block
        /div
        div labor-items
        /div
        div parts
        /div
        div price-block
        /div
    /div */

    // once ticket is rendered:
    //  -on double-click, editable
    //  -on blur, saves
}