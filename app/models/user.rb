class User < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	devise :database_authenticatable, :registerable,
		#:recoverable,
		:rememberable, :trackable, :validatable


	attr_accessible :name, :login, :is_employee, :email, :password, :password_confirmation, :remember_me
end
