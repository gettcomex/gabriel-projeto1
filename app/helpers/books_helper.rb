module BooksHelper
	def translate_model_local
		translate_model(Book)
	end
	alias_method :t_model_local, :translate_model_local

	def translate_models_local
		translate_models(Book)
	end
	alias_method :t_models_local, :translate_models_local

	def translate_attribute_local(attribute)
		translate_attribute(Book, attribute)
	end
	alias_method :t_attr_local, :translate_attribute_local

	def options_for_book_binding
		options = t("books.new.book_binding")
		{ options[:bound] => 0, options[:unbound] => 1 }
	end

	def text_by_book_binding(book_binding)
		options_for_book_binding.invert[book_binding]
	end
end
