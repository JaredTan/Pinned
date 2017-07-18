class Api::FollowingController < ApplicationController

  def create
    @following = Following.new(following_params)
    if @following.save
      render "api/followings/show"
    else
      render json: @following.errors, status: 422
    end
  end

  def destroy
    # @following = Following.find_by(follower_id: following_params[:follower_id], following_id: following_params[:following_id])
    # @following.destroy
    # render json: @following
    @following = Following.find(params[:id])
    @following.destroy
    render json: @following
  end

  private
  def following_params
    params.require(:following).permit(:follower_id, :following_id)
  end
end
