class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/customers'
    }
    
    

    fetchCustomer(params){
        fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
        })
        .then(res => res.json())
    }
    
}