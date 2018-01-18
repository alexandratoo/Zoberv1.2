# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

index = 1
5.times do 
  House.create!({
    name: "Sober Living #{index}",
    street: "123 Main Street",
    state: "CA",
    city: "San Francisco",
    zip_code: "94115",
    email: "test@test.com",
    website: "www.soberliving123",
    facebook: "facebook_url",
    instagram: "instagram_url",
    linkedin: "linkedin_url",
    twitter: "twitter_url",
    capacity: 50,
    price: 1000.00,
    deposit: 2000.00,
    gender: "Coed",
    payment_forms: "Cash",
    insurance: false,
    property_description: "A sober living home",
    neighborhood: "Lower Pac Heights",
    smoking_policy: "Smoking allowed outside",
    transportation: true,
    parking: true,
    activities: "Yoga",
    room_amenities: "Room Service",
    pets: true,
    hotttub: true,
    ac: true,
    heating: true,
    tv: "Flatscreen",
    internet: "None"
  })
  index += 1
end 

index = 6
5.times do 
  House.create!({
    name: "Treatment Center #{index}",
    street: "789 Grove Street",
    state: "CO",
    city: "Denver",
    zip_code: "80123",
    email: "test@test.com",
    website: "www.soberliving123",
    facebook: "facebook_url",
    instagram: "instagram_url",
    linkedin: "linkedin_url",
    twitter: "twitter_url",
    capacity: 100,
    price: 750.00,
    deposit: 1000.00,
    gender: "male",
    payment_forms: "Check",
    insurance: false,
    property_description: "A sober living home",
    neighborhood: "Lower Pac Heights",
    smoking_policy: "Vaping allowed",
    transportation: true,
    parking: true,
    activities: "Tennis",
    room_amenities: "Room Service",
    pets: true,
    hotttub: false,
    ac: true,
    heating: true,
    tv: "Flatscreen",
    internet: "Wifi"
  })
  index += 1
end 

index = 11
5.times do 
  House.create!({
    name: "Sober Living House #{index}",
    street: "456 Market Street",
    state: "CA",
    city: "San Francisco",
    zip_code: "94111",
    email: "test@test.com",
    website: "www.soberliving123",
    facebook: "facebook_url",
    instagram: "instagram_url",
    linkedin: "linkedin_url",
    twitter: "twitter_url",
    capacity: 100,
    price: 2000.00,
    deposit: 4000.00,
    gender: "female",
    payment_forms: "Credit Cards",
    insurance: false,
    property_description: "A sober living house",
    neighborhood: "North Beach",
    smoking_policy: "No Smoking",
    transportation: true,
    parking: false,
    activities: "Chess",
    room_amenities: "Room Service",
    pets: true,
    hotttub: true,
    ac: true,
    heating: true,
    tv: "Flatscreen",
    internet: "Ethernet"
  })
  index += 1
end 