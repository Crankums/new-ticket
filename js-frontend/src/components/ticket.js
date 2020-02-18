class Ticket {
    constructor(ticketObj){
        this.id = ticketObj.id
        this.parts = ticketObj.parts
        this.labor = ticketObj.labor
        this.price = ticketObj.price
    }

    ticketLi(){
        return(`
        <li data-id=${this.id} class="ticket-min"> ${this.id} </li>
        `)
    }

    ticketHTML(){
        return(`<div data-id=${this.id} class='ticket'>
                <p> id: ${this.id} </p>
                <p> parts: ${this.parts} </p>
                <p> labor: ${this.labor} </p>
                <p> price: ${this.price} </p>
            </div>`)
    }

    
}