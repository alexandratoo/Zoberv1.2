class HousesController < ApplicationController
  def index
    @houses = House.all
    @places = Place.order('created_at DESC');
  end

  def new
    @house = House.new
  end

  def create
    @house = House.create(house_params)

    @house.save(validate: false)

      flash[:notice] = "House added successfully"
    render 'index'
  end

  def show
    @house = House.find(params[:id])
    @filters = @house.filters
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

private

def house_params
  params.require(:house).permit(:name, :address, :city, :state, :zip_code, :email, :website, :facebook, :twitter, :linkedin, :capacity, :price, :deposit, :gender, :insurance, :payment_forms, :property_description, :neighborhood,
   :smoking_policy, :insurance, :activities, :hotttub, :ac, :heating, :internet, :parking)
 end
end
