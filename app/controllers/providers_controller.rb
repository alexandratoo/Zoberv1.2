class ProvidersController < ApplicationController
def index
  @product = Product.find_by_sku("yearly")
  @products = Product.all
end
def new

end
end
