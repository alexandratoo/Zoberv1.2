class HousesController < ApplicationController
  def index
    @houses = House.all
  end

  def individual
  end
end
