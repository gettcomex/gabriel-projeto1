json.data do
    json.partial! partial: 'books/book', collection: @books, as: :book
end

json.total @books.total_count