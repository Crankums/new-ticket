class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/findCustomers'
    }

    fetchCustomer(params){
        fetch('http://localhost3000/api/vi/findCustomers', {
        method: 'GET',
        body: JSON.stringify(params)
        }) 
        .then(res => res.json())
    }
    
}