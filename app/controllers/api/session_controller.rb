class Api::SessionController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            flash.now[:errors] = ['Invalid username or password']
        else
            login!(@user)
            render '/api/users/show'
        end
    end

    def destroy 
        p current_user
        
        if current_user
            logout!
            render json: {}
        else
            render json: @user.errors.full_messages, status: 404
        end
    end
end
