unless @loan.errors.any?
	json.success true
	json.data do
		json.(@loan, :end_at)
	end
else
	json.success false
	json.errors @loan.errors
end