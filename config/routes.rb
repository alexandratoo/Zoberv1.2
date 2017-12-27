Rails.application.routes.draw do



  get 'static/about'

  get 'static/contact'

  get 'blog/index'

  get 'blog/each'

  get 'post' => 'blog#post'

  get 'each_post' => 'blog/each_post'

  get 'list' => 'houses#list'

  get 'individual' => 'houses#individual'

  get 'houses/home'
get 'new' => 'users#new'
  root 'home_page#index'
  get 'signup' => 'providers#signup'
  get 'about' => 'static#about'
  get 'contact' => 'static#contact'
  resources :houses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
