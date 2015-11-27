class BooksController < ApplicationController
	load_and_authorize_resource
	
	def index
		@books = Book.page(params[:page])
		respond_with @books
	end

	def show
		@book = Book.find(params[:id])
		render_show @book
	end

	def create
		@book = Book.new(params[:book])
		@book.save

		render_success_message @book
	end

	def update
		@book = Book.find(params[:id])
		@book.update_attributes(params[:book])

		render_success_message @book
	end

	def destroy
		@book = Book.find(params[:id])
		@book.destroy

		render_success_message @book
	end

private
	def render_show(book)
		render partial: "books/book", locals: {
			book: book
		}
	end
end
