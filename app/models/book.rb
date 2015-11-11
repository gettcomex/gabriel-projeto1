class Book < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	has_many :loans

	validates :title, presence: true, length: { maximum: 150 }
	validates :writer, presence: true, length: { maximum: 150 }
	validates :pages, numericality: { only_integer: true, greater_than: 0 }
	validates :copies, numericality: { only_integer: true, greater_than: 0 }
	validates :book_binding, inclusion: { in: [0, 1] }
	validate :copies_is_less_than_loans_opened

	def before_destroy
		if self.loans.empty?
			true
		else
			errors.add(:base, "Cannot delete booking with loans")
			false
		end
	end

	def has_in_inventory?
		self.copies > self.loans.opened.count
	end

	paginates_per 5
	
protected
	def copies_is_less_than_loans_opened
		if self.copies < self.loans.opened.count
			errors.add(:copies, "is smaller than the amount of open loans")
		end
	end
end
