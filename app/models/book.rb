class Book < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	validates :title, presence: true, length: { maximum: 150 }
	validates :writer, presence: true, length: { maximum: 150 }
	validates :pages, numericality: { only_integer: true, greater_than: 0 }
	validates :copies, numericality: { only_integer: true, greater_than: 0 }
	validates :book_binding, inclusion: { in: [0, 1] }

	paginates_per 5
end
