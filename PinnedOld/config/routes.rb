Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :pins, except: [:new, :edit]
    resources :boards, except: [:new, :edit]
    resources :follows, only: [:create, :destroy]
    resources :images, only: [:index, :create, :destroy]
  end

  root "static_pages#root"
end
