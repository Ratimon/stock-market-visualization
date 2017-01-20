class User < ActiveRecord::Base
  has_secure_password
  validates :email, :presence => true, :uniqueness => true, :length => { :minimum => 5 }
end
