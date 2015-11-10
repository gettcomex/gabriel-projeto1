module BooksHelper
	def options_for_book_binding
		options = t("books.new.book_binding")
		{ options[:bound] => 0, options[:unbound] => 1 }
	end

	def text_by_book_binding(book_binding)
		options_for_book_binding.invert[book_binding]
	end
end
