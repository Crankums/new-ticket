class TicketsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/tickets'
    }

    fetchTickets() {
        return fetch(this.baseUrl, {
            method: "GET",
            body: JSON.stringify(params)
        })
        .then(res => res.json())
    }
}