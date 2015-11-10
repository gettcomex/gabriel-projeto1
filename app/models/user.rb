class User < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	devise :database_authenticatable, :registerable,
		:rememberable, :trackable, :validatable
		#:recoverable,

	attr_accessible :name, :login, :is_employee, :email, :password, :password_confirmation, :remember_me

	def self.current=(user)
		Thread.current[:current_user] = user
	end

	def self.current
		Thread.current[:current_user]
	end
end
