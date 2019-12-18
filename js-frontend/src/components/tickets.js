class Tickets {
    constructor() {
        this.tickets = []
        this.adapter = new TicketsAdapter
        this.initBindingsAndEventListeners()
        this.fetchAndLoadTickets()
    }
}