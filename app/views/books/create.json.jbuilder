unless @book.errors.any?
    json.success true
else
    json.success false
    json.errors @book.errors
end