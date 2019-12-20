class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/customers'
    }

    getCustomers() {
        return fetch(this.baseUrl)
        .then(res => res.json())
    }

    // post and update methods

    // createCustomers(value){}

    // updateCustomers(value){}

    
}