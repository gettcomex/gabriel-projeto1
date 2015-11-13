class LoansController < ApplicationController
	load_and_authorize_resource

	before_filter :load_resources, only: %w(new create report)

	def index
		@loans = Loan.allowed.page(params[:page])
		respond_with @loans
	end

	def show
		@loan = Loan.find(params[:id])
		respond_with @loan
	end

	def new
		@loan = Loan.new
		respond_with @loan
	end

	def create
		@loan = Loan.new(params[:loan])
		
		flash[:notice] = t_successfully_created_local if @loan.save
		respond_with @loan
	end

	def renew
		@loan = Loan.find(params[:loan_id])
		authorize! :renew, @loan

		if @loan.book.has_queue_of_books?
			flash[:alerts] = ['Loans with reserve can not be renewed.']
		else
			@loan.renew
			flash[:notice] = "Loan was successfully renewed. New date: #{@loan.end_at}"
		end

		respond_with @loan, location: loan_path(@loan)
	end

protected
	def load_resources
		@users = User.all
		@books = Book.all
	end
end
