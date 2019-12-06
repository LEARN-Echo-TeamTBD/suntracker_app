Rails.application.routes.draw do
  resources :uventries
  devise_for :users, :controllers => { registrations: 'users/registrations'}
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: "pages#index"
end
