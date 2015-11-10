module BooksHelper

	def options_for_book_binding
		options = t("books.new.book_binding")
		{ options[:bound] => 0, options[:unbound] => 1 }
	end
end
