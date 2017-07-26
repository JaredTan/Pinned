Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :pins, except: [:new, :edit]
    resources :boards, except: [:new, :edit]
    resources :pinnings, only: [:create, :destroy]
    resources :followings, only: [:create, :destroy]
  end

  root "static_pages#root"
end
