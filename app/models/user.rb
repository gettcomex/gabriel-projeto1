class User < ActiveRecord::Base
	include ActiveModel::ForbiddenAttributesProtection
	include CreatedBy
	include UpdateBy
	include HasManyLoans
	include HasManyQueueOfBooks

	devise :database_authenticatable, :registerable, :recoverable,
		:rememberable, :trackable, :validatable

	validates :name, presence: true
	validates :login, presence: true

	before_destroy :check_can_be_destroyed!

	PERMITED_FIELDS = %w(name login email password password_confirmation remember_me)
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

protected
	def check_can_be_destroyed!
		check_has_loans! & check_has_queue_of_books!
	end

	def check_has_loans!
		super "Cannot delete user with loans"
	end

	def check_has_queue_of_books!
		super "Cannot delete user with reserves"
	end
end
