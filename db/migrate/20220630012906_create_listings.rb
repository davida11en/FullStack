class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string "name", null: false
      t.string "address", null: false
      t.string "neighborhood", null: false
      t.integer "zip", null: false
      t.integer "price", null: false
      t.string "property_type"
      t.integer "owner_id", null: false
      t.integer "bedrooms", null: false
      t.integer "bathrooms", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.float "lat"
      t.float "lng"
      t.text "description", default: "", null: false
      t.boolean "rent_bool", default: false
      t.string "borough", default: "Brooklyn"
      t.integer "favorite_count", default: 0
      t.timestamps
    end

    add_index :listings, :address, unique: true
    add_index :listings, :name, unique: true

    #Ex:- add_index("admin_users", "username")
  end
end
