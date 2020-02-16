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
        return(`
            <div data-id=${this.id} class='ticket'>
                <ul>
                    <li> id: ${this.id} </li>
                    <li> parts: ${this.parts} </li>
                    <li> labor: ${this.labor} </li>
                    <li> price: ${this.price} </li>
                </ul>
            </div>        
        `)
    }

    
}