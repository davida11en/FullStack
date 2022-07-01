class ListingsController < ApplicationController

    before_action :require_logged_in, only: [:create]

    def index
        @listings = Listings.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end
    
    private

    def listing_params
        params.require(:listing).permit(:name, :address, :neighborhood, :zip, :owner_id, :borough, :neighborhood, :price, :bedrooms, :bathrooms, :description)
    end

    # def rentbox_toggle 
    #     params[:rentbox_toggle] == "rent" ? true : false
    # end

    def address
        params[:address].downcase
    end
end
