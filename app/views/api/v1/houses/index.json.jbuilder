json.array! @houses.each do |house|
  json.id house.id
  json.name house.name
  json.street house.street 
  json.state house.state
  json.city house.city 
  json.zip_code house.zip_code
  json.email house.email 
  json.website house.website 
  json.facebook house.facebook 
  json.instagram house.instagram
  json.linkedin house.linkedin
  json.twitter house.twitter
  json.capacity house.capacity
  json.price house.price
  json.deposit house.deposit
  json.gender house.gender
  json.payment_forms house.payment_forms
  json.insurance house.insurance
  json.property_description house.property_description
  json.neighborhood house.neighborhood
  json.smoking_policy house.smoking_policy
  json.transportation house.transportation
  json.parking house.parking
  json.activities house.activities
  json.room_amenities house.room_amenities
  json.pets house.pets
  json.hotttub house.hotttub
  json.ac house.ac
  json.heating house.heating
  json.tv house.tv
  json.internet house.internet
  json.images house.images.each do |image|
    json.id image.id
    json.house_id house.id
    json.image image.image
  end
end 