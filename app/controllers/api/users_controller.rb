class Api::UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render 'api/users/show'
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = current_user

    if @user
      if @user.update_attributes(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: ["You do not have permission to edit this user."], status: 401
    end
  end

	private

	def user_params
		params.require(:user).permit(:username, :password, :description, :image_url)
	end

end
