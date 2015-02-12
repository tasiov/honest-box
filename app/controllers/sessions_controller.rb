class SessionsController < ApplicationController
	def login
	end

	def logout
		session[:user_id] = nil
	end

	def verify
		user = User.find_by(email: params[:email])
		if user
			session[:user_id] = user.id
			redirect_to :boxes, :id => user.id
		else
			redirect_to :login
		end
	end
end
