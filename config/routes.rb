# frozen_string_literal: true

Rails.application.routes.draw do
  root 'static#index'

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end

  get '*page', to: 'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
end
