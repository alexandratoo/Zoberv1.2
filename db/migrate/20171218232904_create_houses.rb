class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :title
      t.references :provider, foreign_key: true
      t.string :city
      t.string :state
      t.integer :zip_code
      t.text :description
      t.longblob :photo
      t.integer :no_rooms
      t.text :facilities
      t.string :price
    

      t.timestamps
    end
  end
end
