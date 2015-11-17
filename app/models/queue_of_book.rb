class QueueOfBook < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	attr_accessible :book_id, :user_id
	
	belongs_to :book
	belongs_to :user
	
	validates :book, presence: true
	validates :user, presence: true

	scope :allowed, lambda {
		if User.current.is_employee
			QueueOfBook.scoped
		else
			QueueOfBook.where(user_id: User.current.id)
		end
	}
end
