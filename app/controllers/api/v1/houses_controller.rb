class Api::V1::HousesController < ApplicationController
  def index
    @houses = House.near('San Francisco, CA, US', 3)
    render 'index.json.jbuilder'
  end 
end
