class Api::V1::ImagesController < ApplicationController
  @image = Image.all 
  render 'index.json.jbuilder' 
end
