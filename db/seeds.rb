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
Topic.create!(topic: "spirituality");
Topic.create!(topic: "fitness");

image_array = ["https://i.pinimg.com/originals/f8/cc/98/f8cc984c4a18f748590ce25c90208ed7.jpg", "https://s-media-cache-ak0.pinimg.com/originals/b3/e2/0c/b3e20c684a20a0b8a8392c5b4d3eb064.jpg", "https://i.pinimg.com/736x/08/a2/04/08a2044c9e64c8643645b1285f907350--industrial-bedroom-design-urban-industrial.jpg"]


index = 1
43.times do
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
43.times do
  filter_id_array.each do |filter|
    HouseFilter.create!({
    house_id: index,
    filter_id: filter
  })
  end
index += 1
end
