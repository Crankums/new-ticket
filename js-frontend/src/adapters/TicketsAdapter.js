class TicketsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/tickets'
    }

    fetchTickets() {
        return fetch(this.baseUrl, {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    createTickets(ticket) {
        return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    updateTickets(id) {
        return fetch(this.baseUrl+"/"+id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    deleteTickets(id){
        return fetch(this.baseUrl+"/"+id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    // is an update method necessary? if ticket is already created, otherwise updates and adds a line
}