class Blog < ApplicationRecord
  # belongs_to :users
belongs_to :category
  has_many :comments
  mount_uploader :image, ImageUploader
  validates :title, presence:true, length: { minimum: 5}
  validates :post, presence:true

end
