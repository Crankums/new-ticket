Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :tickets
      resources :customers
      get 'findCustomer', to: 'find_or_create_customer'
    end
  end
end
