module HasManyQueueOfBooks
	extend ActiveSupport::Concern
	include CheckHasSymbol

	included do
		has_many :queue_of_books
	end

protected
	def check_has_queue_of_books!(message)
		check_has_symbol!(:queue_of_books, message)
	end
end