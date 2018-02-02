# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
monthly = Product.create(title: "monthly plan",
subtitle: "monthly advertising subscription to zober", image_name: "tinylogo.png", price: "$29.99",
sku: "monthly", download_url: "", description: %{<p>you now have the ability to advertise your home through zober</p>
  });
yearly = Product.create(title: "yearly plan",
  subtitle: "yearly advertising subscription to zober", image_name: "tinylogo.png", price: "$365.00",
  sku: "yearly", download_url: "", description: %{<p>you now have the ability to advertise your home through zober. this is valid for one year. </p>
    });

index = 1
10.times do
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

image_array = ["https://images.craigslist.org/00n0n_cqc2jLGe1w0_600x450.jpg", "https://images.craigslist.org/00f0f_4lZ6YdfQnnu_600x450.jpg", "https://images.craigslist.org/00s0s_ceOPeAs9f25_600x450.jpg"]

 
index = 1
10.times do 
  image_array.each do |link|
    Image.create!({
    house_id: index,
    image: link
  })
  end 
index += 1
end

filter_id_array = [1, 4, 5, 8, 9, 10, 11, 12, 13, 15, 17, 18, 19, 20, 25, 29, 32, 38, 39, 41, 42, 47, 50, 55, 62, 65, 67, 68]

index = 1
10.times do 
  filter_id_array.each do |filter|
    HouseFilter.create!({
    house_id: index,
    filter_id: filter
  })
  end 
index += 1
end