class ProvidersController < ApplicationController
def index
  @product = Product.find_by_sku("yearly")
end
def new

end
end
