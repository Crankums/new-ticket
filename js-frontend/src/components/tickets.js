class Tickets {
    constructor() {
        this.tickets = []
        this.adapter = new TicketsAdapter
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTickets()
    }

    findOrCreateCustomer(e) {
        e.preventDefault()
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