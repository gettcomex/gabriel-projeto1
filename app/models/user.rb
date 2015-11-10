class User < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	devise :database_authenticatable, :registerable, :recoverable,
		:rememberable, :trackable, :validatable

	attr_accessible :name, :login, :is_employee, :email, :password, :password_confirmation, :remember_me
	has_many :loans

	LIMIT_FOR_EMPLOYEE = 10
	LIMIT_FOR_USER = 3

	def self.current=(user)
		Thread.current[:current_user] = user
	end

	def self.current
		Thread.current[:current_user]
	end

	def exceed_the_limit_of_loans?
		self.loans.count >= limit_of_loans
	end

	def limit_of_loans
		self.is_employee ? LIMIT_FOR_EMPLOYEE : LIMIT_FOR_USER
	end
end
