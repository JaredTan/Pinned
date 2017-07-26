class Api::FollowingsController < ApplicationController

  def create
    @following = Following.new(following_params)
    if @following.save
    else
      render json: @following.errors.full_messages, status: 400
    end
  end

  def destroy
    @following = Following.where(followee_id: params[:following][:followee_id], follower_id: params[:following][:follower_id]).first
    if @following.destroy
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  private

  def following_params
    params.require(:following).permit(:followee_id, :follower_id)
  end

end
