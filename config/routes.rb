Rails.application.routes.draw do
  resources :houses, :users, :only => [:new, :create, :index]

  get 'blog/index'

  get 'blog/each'

  get 'post' => 'blog#post'

  get 'each_post' => 'blog/each_post'

  get 'list' => 'houses#list'

  get 'individual' => 'houses#individual'

  get 'houses/home'
  get 'new' => 'users#new'

  root'home_page#index'

  get 'index'=> 'providers#index'
  get 'signup' => 'users#new'

  get 'login' => 'sessions#login'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  get 'about' => 'static#about'
  get 'contact' => 'static#contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
