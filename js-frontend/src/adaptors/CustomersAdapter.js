class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/customers'
    }

    fetchCustomer(params){
        fetch(this.baseUrl) 
        .then(res => res.json())
    }
    
}