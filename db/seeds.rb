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
  rent_bool: [true, false].sample(),
  owner_id: 3,
  lat: rand(40.666885..40.740644),
  lng: -rand(73.765498..73.966863),
  bedrooms: 2,
  favorites: 0,
  bathrooms: 3,
  price: 3,000,
  description: "We found nemo"
  })