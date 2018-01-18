class Product < ApplicationRecord
def price_in_cents
  (self.price.to_i * 100).to_i
  end
end
