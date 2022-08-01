json.extract! @listing, :id, :name, :address, :neighborhood, :zip, :price, :rent_bool, :borough, :property_type, :owner_id, :bedrooms, :bathrooms, :description


json.owner do
    json.extract! @listing.owner, :email, :name, :phone
end