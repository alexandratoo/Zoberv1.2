Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'

  resources :sessions, only: [:create, :destroy, :oauth_create, :oauth_destroy]
  resource :home_page, only: [:show]
  resources :houses, :users, :only => [:new, :create, :index]
  resources :places, except: [:update, :edit, :destroy]
  resources :blogs do
    resources :comments
    resources :providers
  end


  get 'g_sessions/create'
  get 'g_sessions/destroy'

  get 'list' => 'houses#list'

  get 'place' => 'places#index'

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
