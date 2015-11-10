class LoansController < ApplicationController

	before_filter :load_resources, only: %w(new create edit update)

	def index
		@loans = Loan.page(params[:page])
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

	def edit
		@loan = Loan.find(params[:id])
	end

	def create
		@loan = Loan.new(params[:loan])
		
		flash[:notice] = 'Loan was successfully created.' if @loan.save
		respond_with @loan
	end

	def update
		@loan = Loan.find(params[:id])
		flash[:notice] = 'Loan was successfully updated.' if @loan.update_attributes(params[:Loan])
		respond_with @loan
	end

	def destroy
		@loan = Loan.find(params[:id])
		@loan.destroy
		respond_with @loan
	end

protected
	def load_resources
		@users = User.all
		@books = Book.all
	end
end
