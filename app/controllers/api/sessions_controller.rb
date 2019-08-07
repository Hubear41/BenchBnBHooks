class Api::SessionsController < ApplicationController 
    def create 
        @user = User.find_by_credentials(
            username: params[:username],
            password: params[:password])

        if user
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages
        end    
    end

    def destroy 
        @user = current_user

        if @user
            logout!
            render 'api/users/show'
        else
            render json: "Cannot logout if not logged in", status: 404
    end
end