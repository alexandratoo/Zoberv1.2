Rails.application.routes.draw do

  get 'sitemap/index'

  get 'index' => 'dashboard#index'

  devise_for :providers
  # resources :providers, :only => [:show]
  devise_scope :provider do
  get '/providers/:id' => 'providers#show'
end
  mount Ckeditor::Engine => '/ckeditor'
  resources :purchases, only: [:show]
  resources :products, only: [:index, :show]


  resources :charges
  resources :usersessions, only: [:create, :destroy, :oauth_create, :oauth_destroy]
  resource :home_page, only: [:show]
  resources :houses, :users, :only => [:new, :create, :index]
  resources :places, except: [:update, :edit, :destroy]
  resources :blogs do
    resources :comments

  end
get 'blogs/by_year_and_month/:year/:month' => 'blogs#by_year_and_month', :as=> :blogs_by_year_and_month
match 'sitemap', :to => 'sitemap#index', :via => [:get]
match '/providers/:id',     to: 'providers#show',       via: 'get'
  get 'g_sessions/create'
  get 'g_sessions/destroy'

  get 'list' => 'houses#list'

  get 'place' => 'places#index'

  get 'individual' => 'houses#individual'

  get 'houses/home'
  get 'houses/:id' => 'houses#show'
  get 'new' => 'users#new'
  get 'signup' => 'users#new'
  get 'login' => 'usersessions#login'
  post 'login' => 'usersessions#create'
  delete 'logout' => 'usersessions#destroy'

  get 'g_sessions/create'
  get 'g_sessions/destroy'

  get 'auth/:provider/callback', to: 'usersessions#oauth_create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'usersessions#oauth_destroy', as: 'signout'


  root to: 'home_page#index'

  get 'about' => 'static#about'
  get 'contact' => 'static#contact'

  namespace :api do
    namespace :v1 do
      get '/houses' => 'houses#index'
      get '/images' => 'images#index'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
