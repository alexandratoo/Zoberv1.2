Rails.application.routes.draw do



  get 'blog/index'

  get 'blog/each'

  get 'post' => 'blog#post'

  get 'each_post' => 'blog/each_post'

  get 'list' => 'houses#list'

  get 'individual' => 'houses#individual'

  get 'houses/home'

  root 'home_page#index'
  get 'signup' => 'providers#signup'
  resources :houses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
