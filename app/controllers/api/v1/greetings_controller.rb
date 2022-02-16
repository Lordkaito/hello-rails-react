module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        @greetings = Greeting.all
        @greeting = @greetings.sample
        render json: @greeting
      end
    end
  end
end
