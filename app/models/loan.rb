class Loan < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	attr_accessible :book_id, :user_id

	belongs_to :book
	belongs_to :user

	validate :user_exceed_the_limit_of_loans
	validate :book_has_in_inventory

	before_create :add_starts_at

	scope :opened, lambda {
		where("end_at > ?", DateTime.now.to_date)
	}

	DURATION_IN_DAYS = 7.days

protected
	def user_exceed_the_limit_of_loans
		if self.user.exceed_the_limit_of_loans?
			errors.add(:user, "exceeded the limit of loans")
		end
	end

	def book_has_in_inventory
		unless self.book.has_in_inventory?
			errors.add(:book, "is not in inventory")
		end
	end

	def add_starts_at
		self.starts_at = DateTime.now.to_date
		self.end_at = self.starts_at + DURATION_IN_DAYS
	end
end
