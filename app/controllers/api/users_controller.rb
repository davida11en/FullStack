class Api::UsersController < ApplicationController
    # before_action :require_logged_in, only: [:index, :show]
    # skip_before_action :verify_authenticity_token

    def new
        @user = User.new
        render :new
    end

    def create 
        @user = User.new(user_params)

        if @user.save 
            login(@user)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
      
    def index
        @users = User.all
        render :index
    end
    
    def show
        @user = User.find(params[:id])
        if @user
          render :show
        else
          render json: @user.errors.full_messages, status: 404
        end
    end

    private 
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
