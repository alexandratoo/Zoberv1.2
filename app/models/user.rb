class User < ApplicationRecord

devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable,
:validatable
attr_accessor :email, :password, :password_confirmation, :remember_me
  attr_accessor :first_name, :last_name, :email, :password, :password_confirmation
end
