class Book < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	attr_accessor :flash_alerts

	has_many :loans
	has_many :queue_of_books

	validates :title, presence: true, length: { maximum: 150 }
	validates :writer, presence: true, length: { maximum: 150 }
	validates :pages, numericality: { only_integer: true, greater_than: 0 }
	validates :copies, numericality: { only_integer: true, greater_than: 0 }
	validates :book_binding, inclusion: { in: [0, 1] }
	validate :copies_is_less_than_loans_opened
	
	before_destroy :check_if_can_be_destroyed

	scope :not_available, lambda {
		where(%{
			copies = (
				SELECT
					COUNT(id)
				FROM
					loans
				WHERE
					book_id = books.id
			)
		})
	}

	def has_in_inventory?
		self.copies > self.loans.opened.count
	end

	def has_queue_of_books?
		self.queue_of_books.any?
	end
	
protected
	def copies_is_less_than_loans_opened
		if self.copies < self.loans.opened.count
			errors.add(:copies, :is_less_than_loans_opened)
		end
	end

	def check_if_can_be_destroyed
		self.flash_alerts = []
		check_if_book_has_loans & check_if_book_has_queue_of_books
	end

	def check_if_book_has_loans
		if self.loans.empty?
			true
		else
			error = "Cannot delete booking with loans."

			self.flash_alerts << error
			errors.add(:base, error)

			false
		end
	end

	def check_if_book_has_queue_of_books
		if self.queue_of_books.empty?
			true
		else
			error = "Cannot delete booking with reserves."

			self.flash_alerts << error
			errors.add(:base, error)

			false
		end
	end
end