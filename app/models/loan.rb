class Loan < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	attr_accessible :book_id, :user_id

	belongs_to :book
	belongs_to :user

	validates :book, presence: true
	validates :user, presence: true

	validate :user_exceed_the_limit_of_loans
	validate :book_has_in_inventory

	before_create :add_starts_at
	after_create :deliver_notification

	scope :opened, lambda {
		where("end_at > ?", Date.now)
	}

	scope :allowed, lambda {
		if User.current.is_employee
			Loan.scoped
		else
			Loan.where(user_id: User.current.id)
		end
	}

	scope :starts_at_between, lambda { |starts_filter, end_filter|
		where("starts_at BETWEEN ? AND ?", starts_filter, end_filter)
	}

	DURATION_IN_DAYS = 7.days

	def renew
		if self.book.has_queue_of_books?
			errors.add(:base, 'Loans with reserve can not be renewed.')
		else
			self.end_at = Date.now + DURATION_IN_DAYS
			self.save
		end
	end

protected
	def user_exceed_the_limit_of_loans
		if self.user.exceed_the_limit_of_loans?
			errors.add(:user, :exceeded_the_limit_of_loans)
		end
	end

	def book_has_in_inventory
		unless self.book.has_in_inventory?
			errors.add(:book, :not_has_in_inventory)
		end
	end

	def add_starts_at
		self.starts_at = Date.now
		self.end_at = self.starts_at + DURATION_IN_DAYS
	end

	def deliver_notification
		LoanMailer.notification(self).deliver
	end
end
