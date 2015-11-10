class BooksController < ApplicationController

	def index
		@books = Book.page(params[:page])
		respond_with @books
	end

	# def show
	# 	@book = Book.find(params[:id])
	# 	respond_with @book
	# end

	def new
		@book = Book.new
		respond_with @book
	end

	def edit
		@book = Book.find(params[:id])
	end

	def create
		@book = Book.new(params[:book])

		flash[:notice] = 'Book was successfully created.' if @book.save
		respond_with @book
	end

	def update
		@book = Book.find(params[:id])
		flash[:notice] = 'Book was successfully updated.' if @book.update_attributes(params[:book])
		respond_with @book
	end

	# def destroy
	# 	@book = Book.find(params[:id])
	# 	@book.destroy
	# 	respond_with @book
	# end
end
