class CustomersAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/findCustomer'
    }
    // createCustomer(){fetch(this.baseUrl, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(params)
    // })
    // .then(res => res.json())}

    // getCustomer(){
    // }
    

    fetchCustomer(data){
       return fetch(this.baseUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
    }
    
}