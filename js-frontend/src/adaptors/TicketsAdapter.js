class TicketsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/notes'
    }

    getTickets() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    /* i have routes and controllers for both customers and tickets. i believe that
    I should run a findOrCreate function, run the create customer through the customer routes. otherwise, find the 
    customer, attach it to the ticket, and then allow it to be the @customer.tickets[*] object */

    // createTicket(value){}

    // updateTicket(value){}
}