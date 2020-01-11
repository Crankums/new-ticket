class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/customers'
    }

    fetchCustomer(params){
        fetch(baseUrl, {
        method: 'GET',
        body: JSON.stringify(params)
        }) 
        .then(res => res.json())
    }
    
}