class Place < ApplicationRecord
  attr_accessor :raw_address

  geocoded_by :raw_address

end
