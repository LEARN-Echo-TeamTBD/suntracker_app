Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'users/registrations'}
  resources :users do
      resources :uventries
  end

  devise_scope :user do
    authenticated :user do
        root 'pages#dashboard', as: :authenticated_root
    end

    unauthenticated do
        root 'pages#index', as: :unauthenticated_root
    end
  end

  get 'uvforecast', to: 'uv_api#forecast'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: "pages#index"
end
