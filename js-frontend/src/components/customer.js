class Customer {
    constructor(customerObj){
        this.id =  customerObj.id
        this.name = customerObj.name
        this.email = customerObj.email
        this.tickets = customerObj.tickets.map(t => new Ticket(t))
    }

    customerInfoHTML(){
        return(`
        <div class='customer'>
            <p> ${this.id}</p>
            <p> Name: ${this.name} </p>
            <p> Email: ${this.email} </p>
            <p> tix: ${this.tickets} </p>
        </div>`)
    }
}