# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Customer.destroy_all
Ticket.destroy_all

Customer.create(name: "grank", email: "grank@grank.com")
Ticket.create(parts: "tire", labor: "tire install", price: 20, customer_id: 1)
Ticket.create(parts: "chain", labor: "chain install", price: 15, customer_id: 1)