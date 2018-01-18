class PurchasesController < ApplicationController
after_action :email_purchaser, only: [:create]
  def show
    @purchase = Purchase.find_by_uuid(params[:id])
  end
end
