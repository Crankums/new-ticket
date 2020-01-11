class Ticket {
    constructor(ticketObj){
        this.id = ticketObj.id
        this.item = ticketObj.item
        this.price = ticketObj.price
    }

    ticketLi(){
        return(`
        <li> data-id=${this.id}>${this.id} </li>
        `)
    }

    ticketHTML(){
        return(`
            <div class='ticket'>
                <ul>
                    <li> id: ${this.id} </li>
                    <li> item: ${this.item} </li>
                    <li> price: ${this.price} </li>
                </ul>
            </div>        
        `)
    }

    
}