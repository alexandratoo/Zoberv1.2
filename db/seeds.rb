# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

index = 1
50.times do 
  House.create!({
    name: "Sober Living #{index}",
    address: "123 Main Street",
    state: "CA",
    city: "San Francisco",
    zip_code: "94115",
    email: "test@test.com",
    website: "www.soberliving123",
    facebook: "facebook_url",
    instagram: "facebook_url",
    linkedin: "facebook_url",
    twitter: "facebook_url",
    capacity: 50,
    price: 20.00,
    deposit: 20.00,
    gender: "co-ed",
    payment_forms: "Visa",
    insurance: false,
    property_description: "A sober living home",
    neighborhood: "Lower Pac Heights",
    smoking_policy: "Smoking Ok",
    transportation: true,
    parking: "Street",
    activities: "Yoga",
    room_amenities: "Room Service",
    pets: true,
    hotttub: true,
    ac: true,
    heating: true,
    tv: "Flatscreen",
    internet: true,
    room_description: "Hip interior, comfortable bed"
  })
  index += 1
end 