class User < ApplicationRecord
  has_secure_password
  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z]+\z/


  validates :username, :email, presence: true
  validates :email, uniqueness: true
end
