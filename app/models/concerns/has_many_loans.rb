module HasManyLoans
	extend ActiveSupport::Concern
	include CheckHasSymbol

	included do
		has_many :loans
	end

protected
	def check_has_loans!(message)
		check_has_symbol!(:loans, message)
	end
end