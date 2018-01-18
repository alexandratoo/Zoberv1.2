class User < ApplicationRecord
  has_secure_password

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.image = auth.info.image
      user.username = auth.info.name
      user.email = auth.info.email
      user.password = 'super_secret' # can make password nullable if using omniauth token
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!

    end
  end
  # VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z]+\z/

  # validates :username, :email, presence: true // disabled for google oauth
  validates :email, uniqueness: true
end
