class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username], 
            params[:user][:password]
            )
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Incorrect credentials"], status: 422
        end
    end

    def destroy
        if current_user
            logout!
            render json: ["You've been successfully logged out"]
        else
            render json: ["No user found to logout"], status: 404
        end
    end
end
