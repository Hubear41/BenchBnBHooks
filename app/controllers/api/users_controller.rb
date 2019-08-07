class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages
        end
    end

    private

    def user_params
        params.permit(:user).require(:username, :password)
    end
end
