class HousesController < ApplicationController
  def index
    @houses = House.all
  end

  def new
    @house = House.new
  end
  def create
    @house = House.new(house_params)

    @house.save(validate: false)
    redirect_to @house
  end
end

  # @house = House.new
  #   @house.name = params[:house]
  #   @house.user = current_user
  #
  #   if @house.save
  #     flash[:notice] = "House added successfully"
  #   else
  #     flash.now[:alert] = "Uh oh, it didn't save. Try again."
  #     render :new
  #   end
  # end
end
private
def house_params
  params.require(:house)
end
