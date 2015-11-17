class Book < ActiveRecord::Base
	include CreatedBy
	include UpdateBy
	include HasManyLoans
	include HasManyQueueOfBooks

	attr_accessor :flash_alerts

	validates :title, presence: true, length: { maximum: 150 }
	validates :writer, presence: true, length: { maximum: 150 }
	validates :pages, numericality: { only_integer: true, greater_than: 0 }
	validates :copies, numericality: { only_integer: true, greater_than: 0 }
	validates :book_binding, inclusion: { in: [0, 1] }
	validate :copies_is_less_than_loans_opened
	
	before_destroy :check_can_be_destroyed!

	scope :not_available, lambda {
		where("copies = (SELECT COUNT(id) FROM loans WHERE book_id = books.id)")
	}

	def has_in_inventory?
		self.copies > self.loans.opened.count
	end

	def has_queue_of_books?
		self.queue_of_books.any?
	end
	
protected
	def copies_is_less_than_loans_opened
		if self.copies.present? && self.copies < self.loans.opened.count
			errors.add(:copies, :is_less_than_loans_opened)
		end
	end

	def check_can_be_destroyed!
		self.flash_alerts = []
		check_has_loans! & check_has_queue_of_books!
	end

	def check_has_loans!
		super "Cannot delete booking with loans."
	end

	def check_has_queue_of_books!
		super "Cannot delete booking with reserves."
	end
end