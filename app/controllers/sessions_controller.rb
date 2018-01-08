class SessionsController < ApplicationController
  def login
  end

  def create
    user = User.where(email: params[:email]).first
    if user && user.authenticate(params[:password])
      # They gave us a good password
      session[:id] = user.id
      redirect_to root_path,
        notice: "Welcome back #{user.username.titleize}."
    else
      flash[:error] = 'Invalid email or password'
      render :login
    end
  end

  def destroy
    if user = current_user
      session.delete(:id)
      redirect_to root_path,
        notice: "#{user.email} has been logged out"
    end
  end
end
