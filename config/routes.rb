Rails.application.routes.draw do


  namespace :api do
    resources :grumbles, except: [:edit, :new]
  end

  root "grumbles#home"
end