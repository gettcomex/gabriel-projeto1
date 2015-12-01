json.(loan, :id, :book_id, :user_id, :starts_at, :end_at)

json.book do
	json.id loan.book.id
	json.title loan.book.title
end

json.user do
	json.id loan.user.id
	json.name loan.user.name
end