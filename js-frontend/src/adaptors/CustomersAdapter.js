class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/findCustomers'
    }

    fetchCustomer(params){
        fetch('http://localhost3000/findCustomer', {
        method: 'GET',
        body: JSON.stringify(params)
        }) 
        .then(res => return res.json())
    }
    
}