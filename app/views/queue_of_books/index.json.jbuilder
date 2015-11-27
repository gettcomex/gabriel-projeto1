json.data do
	json.partial! partial: 'queue_of_books/queue_of_book', collection: @queue_of_books, as: :queue_of_book
end

json.total @queue_of_books.total_count