module CheckHasSymbol
	extend ActiveSupport::Concern

protected
	def check_has_symbol!(symbol, message)
		if self.send(symbol).empty?
			true
		else
			error = message

			self.flash_alerts << error
			errors.add(:base, error)

			false
		end
	end
end