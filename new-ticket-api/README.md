
## Installation

Currently, this app uses sqlite3 as packaged with Rails. I will eventually migrate it to Postgresql.

```cd new-ticket-api
bundle install
rails db:create
rails db:migrate
rails db:seed [optional]
rails s
```


Then open js-frontend/index.html in a browser.

## Usage

Enter any name and email. You can enter name: `grank` and email: `grank@grank.com` to see a customer with existing tickets. Otherwise, feel free to create your own. Then click the "Create Ticket" button to make your own ticket. Parts are optional, but a "Labor" value is required for each ticket. If a ticket is not showing up right away, reload the page and search the same customer, and it should appear. 

Click the "Delete Ticket" button to remove a currently existing ticket.

## Contributing

Pull requests are welcome. This is app designed to be a front-end component of a larger app, so if you wish to make large changes in order to make it a stand-alone app or to fit into another framework, please reach out to me.

## LICENSE

[MIT](https://choosealicense.com/licenses/mit/)