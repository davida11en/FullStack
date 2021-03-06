# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
# user1 = User.create({ first_name: "demo", last_name: "user", email: "demo_user@demo.com", password: "password"})


user1 = User.create(
    username: "bob",
    email: "bob@aol.com",
    password: 123456
  )

user3 = User.create(
  username: 'bossman',
  email: "bo55man@work.com",
  password: 123456,
  name: 'Tony Soprano',
  phone: '1-(800)-123-4567'
)

User.create(
    username: "bill",
    email: "demo@user.com",
    password: 123456
)

Listing.destroy_all

listing1 = Listing.create!({
  name: "Demo House", 
  address: "42 Wallabee Way", 
  neighborhood: "Sydney",
  borough: "Brooklyn",
  zip: "12345", 
  property_type: "Fish Tank",
  owner_id: user1.id,
  bedrooms: 2,
  bathrooms: 3,
  price: 3000,
  description: "We found nemo",
  })

listing2 = Listing.create!({
  name: "Bada Bing", 
  address: "Joizey Turnpike", 
  neighborhood: "Sydney",
  borough: "Newer Part",
  zip: "12345", 
  property_type: "Office",
  owner_id: user3.id,
  bedrooms: 3,
  bathrooms: 2,
  price: 7000,
  description: "Only the best",
  })