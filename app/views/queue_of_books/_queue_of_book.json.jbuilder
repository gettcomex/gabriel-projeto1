json.(queue_of_book, :id, :book_id, :user_id)

json.book do
	json.partial! 'books/book', book: queue_of_book.book
end

json.user do
	json.partial! 'users/user', user: queue_of_book.user
end