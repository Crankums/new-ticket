class Customer {
    constructor(customerObj){
        this.id =  customerObj.id
        this.name = customerObj.name
        this.email = customerObj.email
        this.tickets = customerObj.tickets.map(t => new Ticket(t))
    }

    customerInfoHTML(){
        return(`
        <div class='customer' data-customer="${this.id}">
            <p> Customer ID: ${this.id}</p>
            <p> Name: ${this.name} </p>
            <p> Email: ${this.email} </p>
        </div>`)
    }
}