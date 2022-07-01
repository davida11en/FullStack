class Listing < ApplicationRecord
    validates :name, :address, :neighborhood, :borough, :zip, :owner_id, :price, :bedrooms, :bathrooms, presence: true

    belongs_to :owner, class_name: "User", foreign_key: "owner_id"

end
