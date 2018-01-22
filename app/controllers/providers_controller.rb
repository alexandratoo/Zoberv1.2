class ProvidersController < ApplicationController
  devise :database_authenticatable, :registerable, :recoverable, :reemberable, :trackable, :validatable

end
