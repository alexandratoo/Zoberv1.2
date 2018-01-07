class SessionsController < ApplicationController

  def login
  end

  def create
    @user = User.find_by_email(params[:login][:email])
    if @user && @user.authenticate(params[:login][:password])
      session[:user_id] = @user.id # Set the current user's session by id
      redirect_to root_path, notice: 'Logged in, success!'

    else
      redirect_to :login, notice: 'Invalid email or password.'
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path, success: 'Logged out.'
  end
end
