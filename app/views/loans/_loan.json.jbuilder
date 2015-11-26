json.(loan, :id, :book_id, :user_id, :starts_at, :end_at)

json.book do
	json.partial! 'books/book', book: loan.book
end

json.user do
	json.partial! 'users/user', user: loan.user
end