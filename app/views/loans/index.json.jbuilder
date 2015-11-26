json.data do
	json.partial! partial: 'loans/loan', collection: @loans, as: :loan
end

json.total @loans.total_count