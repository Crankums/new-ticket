class Ticket {
    constructor(ticketObj){
        this.id = ticketObj.id
        this.parts = ticketObj.parts
        this.labor = ticketObj.labor
        this.price = ticketObj.price
    }

    ticketLi(){
        return(`
        <li data-id=${this.id} class="ticket-min"> Ticket Number: ${this.id} </li>
        `)
    }

    ticketHTML(){
        return(`<div data-id=${this.id} class='ticket'>
                <p> Ticket Number: ${this.id} </p>
                <p> Parts: ${this.parts} </p>
                <p> Labor: ${this.labor} </p>
                <p> Price: ${this.price} </p>
            </div>`)
    }

    
}