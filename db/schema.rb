# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180108054852) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.string "post"
    t.string "image"
    t.string "name"
    t.string "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "name"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "houses", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "state"
    t.string "city"
    t.integer "zip_code"
    t.string "email"
    t.string "website"
    t.string "facebook"
    t.string "instagram"
    t.string "linkedin"
    t.string "twitter"
    t.integer "capacity"
    t.decimal "price", precision: 4, scale: 2
    t.decimal "deposit", precision: 4, scale: 2
    t.string "gender"
    t.string "payment_forms"
    t.boolean "insurance"
    t.string "property_description"
    t.string "neighborhood"
    t.string "smoking_policy"
    t.boolean "transportation"
    t.string "parking"
    t.string "activities"
    t.string "room_amenities"
    t.boolean "pets"
    t.boolean "hotttub"
    t.boolean "ac"
    t.boolean "heating"
    t.string "tv"
    t.string "internet"
    t.string "room_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "providers", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "organization"
    t.string "occupation"
    t.string "email"
    t.string "encrypted_password"
    t.string "salt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "encrypted_password"
    t.string "salt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "string"
  end

end
