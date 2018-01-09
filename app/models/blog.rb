class Blog < ApplicationRecord
  
  validate :title, :post
  has_many :comments
end
