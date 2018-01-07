class User < ApplicationRecord
  has_secure_password
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z]+\z/


  validates :first_name, :last_name, :email, presence: true
  validates :email, format: { with: VALID_EMAIL_REGEX }, uniqueness: true
end
