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

    // render completed ticket

    // once ticket is rendered:
    //  -on double-click, editable
    //  -on blur, saves
}