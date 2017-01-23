Rails.application.routes.draw do
  root :to => 'pages#home'
  resources :users, :only => [:new, :create, :update, :index]
  resources :user_stocks, except: [:show, :edit, :update]
  get '/users/edit' => 'users#edit'

  delete '/login' => 'session#destroy'
  get '/login' => 'session#new'
  post '/login' => 'session#create'

  get 'my_portfolio' => "users#my_portfolio"
  get 'search_stocks' => "stocks#search"

end
