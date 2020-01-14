Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :tickets
      resources :customers
      get '/findCustomer' => 'customers#find_or_create_customer'
      # post '/findCustomer' => 'customers#find_or_create_by_name'
    end
  end
end
