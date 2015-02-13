class User < ActiveRecord::Base
  belongs_to :box
  validates :email, uniqueness: true
end
