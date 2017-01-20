class UsersController < ApplicationController

  before_action :check_if_logged_in, :only => [:edit, :update]
  before_action :check_if_admin, :only => [:index]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save # Checking for validity
      flash[:notice] = 'User was successfully created.'
      redirect_to root_path
    else
      flash.now[:error] = 'Could not create user.'
      render :new
    end
  end

  def edit
    check_if_logged_in
    @user = @current_user
  end

  def update
    user = @current_user
    user.update user_params
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation , :avatar)
  end
end
