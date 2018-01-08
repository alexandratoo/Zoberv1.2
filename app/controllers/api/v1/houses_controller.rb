class Api::V1::HousesController < ApplicationController

  def index
    @houses = House.all
    render 'index.json.jbuilder'
  end 
end
