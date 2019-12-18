class TicketsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/notes'
    }

    getTickets() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }
}