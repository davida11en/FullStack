class ListingsController < ApplicationController

    before_action :require_logged_in, only: [:create]

    def index
        @listings = Listing.all
        render :index
    end

    def show
        @listing = Listing.find(params[:id])
    end

    def create 
        @listing = Listing.new(listing_params)

        @listing.owner = current_user

        if @listing.save
            p 'looking for listing ' + @listing
            render :show
        else
            render json: @listing.errors.full_messsages, status: 422
        end
    end

    def update
        @listing = Listing.find(listing_params[:id])
        p listing_params[:id]
        
        if @listing.update(listing_params)
            @listing.save
          render :show
        else
          render json: @lisiting.errors.full_messages, status: 422
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if @listing.destroy
            render json: ["Successfully Deleted"], status: 200
        else
            
            render json: ["Sorry, we couldn't find what you were looking for"], status: 404
        end
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
