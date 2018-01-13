class House < ApplicationRecord
  geocoded_by :address

  def address
    [street, city, state, "United States"].compact.join(', ')
  end
end
