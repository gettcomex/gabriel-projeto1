class Employee::BooksController < Employee::BaseController

	def index
		@books = Book.page(params[:page])
		respond_with @books
	end

	def show
		@book = Book.find(params[:id])
		respond_with @book
	end

	def new
		@book = Book.new
		respond_with @book
	end

	def edit
		@book = Book.find(params[:id])
	end

	def create
		@book = Book.new(params[:book])

		flash[:notice] = t_successfully_created_local if @book.save
		respond_with :employee, @book
	end

	def update
		@book = Book.find(params[:id])
		flash[:notice] = t_successfully_updated_local if @book.update_attributes(params[:book])
		respond_with :employee, @book
	end

	def destroy
		@book = Book.find(params[:id])
		@book.destroy
		flash[:alerts] = @book.flash_alerts
		respond_with :employee, @book
	end
end
