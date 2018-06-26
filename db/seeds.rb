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
Topic.create!(name: "spirituality");
Topic.create!(name: "fitness");
Admin.create!(email:"tyler@zober.co", password:"Zober2018");
