Rails.application.routes.draw do
  get 'g_sessions/create'

  get 'g_sessions/destroy'

  resources :houses, :users, :only => [:new, :create, :index]

  get 'blog/index'

  get 'blog/each'

  get 'post' => 'blog#post'

  get 'each_post' => 'blog/each_post'

  get 'list' => 'houses#list'

  get 'individual' => 'houses#individual'

  get 'houses/home'
  get 'new' => 'users#new'


  get 'index'=> 'providers#index'
  get 'signup' => 'users#new'

  get 'login' => 'sessions#login'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'

  get 'g_sessions/create'

  get 'g_sessions/destroy'

  get 'auth/:provider/callback', to: 'sessions#oauth_create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#oauth_destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy, :oauth_create, :oauth_destroy]
  resource :home_page, only: [:show]

  root to: 'home_page#index'

  get 'about' => 'static#about'
  get 'contact' => 'static#contact'

  namespace :api do
    namespace :v1 do
      get '/houses' => 'houses#index'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
