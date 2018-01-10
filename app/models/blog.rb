class Blog < ApplicationRecord
  belongs_to :users
  has_many :comments
  validates :title, presence:true, length: { minimum: 5}
end
