Rails.application.routes.draw do



  get 'houses/home'

  root 'home_page#index'
  get 'signup' => 'providers#signup'
  resources :houses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
