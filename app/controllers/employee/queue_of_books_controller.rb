class Employee::QueueOfBooksController < Employee::BaseController

	before_filter :load_resources, only: %w(new create)

	def index
		@queue_of_books = QueueOfBook.page(params[:page])
		respond_with @queue_of_books
	end

	def show
		@queue_of_book = QueueOfBook.find(params[:id])
		respond_with @queue_of_book
	end

	def new
		@queue_of_book = QueueOfBook.new
		respond_with @queue_of_book
	end

	def create
		@queue_of_book = QueueOfBook.new(params[:queue_of_book])

		flash[:notice] = t_successfully_created_local if @queue_of_book.save
		respond_with :employee, @queue_of_book
	end

	def destroy
		@queue_of_book = QueueOfBook.find(params[:id])
		@queue_of_book.destroy
		respond_with :employee, @queue_of_book
	end

protected
	def load_resources
		@users = User.all
		@books = Book.not_available
	end
end
