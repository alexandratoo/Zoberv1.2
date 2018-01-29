class Provider < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :houses
has_many :products

def self.find_by_uid!(uid)
   Provider.find_by!("firstname = :p OR id = :p", p: uid)
 end

require "stripe"
def stripe_user_account
  return @stripe_user_account if defined? @stripe_user_account
  if Rails.env.production?
    Stripe.api_key = ENV['STRIPE_SECRET_KEY_PRO']
  else
    Stripe.api_key = ENV['STRIPE_SECRET_KEY']
  end

  Stripe::Account.list(limit: 99).each do |account|
    if account.email == self.email
      @stripe_user_account = account.id
      break
    end
  end
  @stripe_user_account
end
end
