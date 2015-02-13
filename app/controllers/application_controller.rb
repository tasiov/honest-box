class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :get_user
  before_action :log_params

  def get_user
  	if session[:user_id]
  		@current_user = User.find(session[:user_id])
  	else
  		@current_user = nil
  	end
  end

  def log_params
    Rails.logger.debug "********************"
    Rails.logger.debug params
    Rails.logger.debug "********************"
  end
end
