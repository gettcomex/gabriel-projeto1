class LoansController < ApplicationController
	load_and_authorize_resource

	def index
		@loans = Loan.allowed.page(params[:page])
		respond_with @loans
	end

	def show
		@loan = Loan.find(params[:id])
		render_show @loan
	end

	def create
		@loan = Loan.new(params[:loan])
		@loan.save
		
		render_success_message @loan
	end

	def renew
		@loan = Loan.find(params[:loan_id])
		authorize! :renew, @loan
		
		@loan.renew

		respond_with @loan
	end

	def report
	end

	def report_result
		filter = params[:filter]

		starts_at = date_from(filter, 'starts_at')
		end_at = date_from(filter, 'end_at')
		
		@loans = Loan.starts_at_between(starts_at, end_at)
		@loans = @loans.where(book_id: params[:book_id]) if params[:book_id].present?
		@loans = @loans.where(user_id: params[:user_id]) if params[:user_id].present?
	end

private
	def date_from(filter, name)
		year = filter[name + '(1i)'].to_i
		month = filter[name + '(2i)'].to_i
		day = filter[name + '(3i)'].to_i

		Date.new(year, month, day)
	end

	def render_show(loan)
		render partial: "loans/loan", locals: {
			loan: loan
		}
	end
end
