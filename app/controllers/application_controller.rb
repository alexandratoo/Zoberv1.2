class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
before_action :configure_permitted_parameters, if: :devise_controller?
  # helper_method :current_user
 private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |params|
      params.permit(
        :email, :password, :password_confirmation, :firstname,
        :lastname, :organization, :occupation
      )
    }
    devise_parameter_sanitizer.permit(:account_update) { |params|
      params.permit(
        :email, :password, :password_confirmation, :firstname,
        :lastname, :organization, :occupation
      )
    }
  end
end


  private

  def current_user
    @current_user ||= User.find(session[:id]) if session[:id]
     rescue ActiveRecord::RecordNotFound
  end
