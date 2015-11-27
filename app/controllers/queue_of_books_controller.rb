class QueueOfBooksController < ApplicationController
	load_and_authorize_resource

	before_filter :load_resources, only: %w(new create)

	def index
		@queue_of_books = QueueOfBook.allowed.page(params[:page])
		respond_with @queue_of_books
	end

	def show
		@queue_of_book = QueueOfBook.find(params[:id])
		render_show @queue_of_book
	end

	def create
		@queue_of_book = QueueOfBook.new(params[:queue_of_book])

		flash[:notice] = t_successfully_created_local if @queue_of_book.save
		render_success_message @queue_of_book
	end

	def destroy
		@queue_of_book = QueueOfBook.find(params[:id])
		@queue_of_book.destroy
		render_success_message @queue_of_book
	end

private
	def load_resources
		@users = User.all
		@books = Book.not_available
	end

	def render_show(queue_of_book)
		render partial: "queue_of_books/queue_of_book", locals: {
			queue_of_book: queue_of_book
		}
	end
end
