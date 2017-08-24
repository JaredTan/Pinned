class Api::UsersController < ApplicationController

	def index
		@users = User.all
		render 'api/users/index'
	end

	def create
		@user = User.new(user_params)
		@user.image_url = 'http://res.cloudinary.com/jaredtan/image/upload/v1500969184/display_pic_nwmrpn.png'
		if @user.save
			login(@user)
			render 'api/users/show'
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
    @user = User.find(params[:id])
    render 'api/users/show'
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
