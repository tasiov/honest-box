class User < ActiveRecord::Base
  belongs_to :box
  validates :email, uniqueness: true
  skip_before_action :redirect_unless_loggedin 
end
