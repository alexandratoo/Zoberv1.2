class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :image
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :username
      t.string :password_digest

      t.string :provider # required for oauth not providers table
      t.string :uid
      t.string :name
      t.string :oauth_token
      t.datetime :oauth_expires_at

      t.timestamps

    end
  end
end
