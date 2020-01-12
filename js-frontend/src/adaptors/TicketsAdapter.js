class TicketsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/tickets'
    }

    fetchTickets() {
        return fetch(this.baseUrl, {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(params)
        })
        .then(res => res.json())
    }

    createTickets() {
        fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    }

    updateTickets() {
        fetch(this.baseUrl, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    }

    // is an update method necessary? if ticket is already created, otherwise updates and adds a line
}