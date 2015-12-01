json.(queue_of_book, :id, :book_id, :user_id)

json.book do
	json.id queue_of_book.book.id
	json.title queue_of_book.book.title
end

json.user do
	json.id queue_of_book.user.id
	json.name queue_of_book.user.name
end