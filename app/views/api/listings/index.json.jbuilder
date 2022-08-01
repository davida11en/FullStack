@listings.each do |listing|
    json.set! listing.id do
        json.partial! "/api/listings/listing", listing: listing

        json.owner do
            json.extract! listing.owner, :email, :name, :phone
        end
    end
end