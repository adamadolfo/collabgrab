Rails.application.routes.draw do
  resources :follows
  resources :project_skills
  resources :projects
  resources :collaborations
  resources :user_skills
  resources :skills
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
