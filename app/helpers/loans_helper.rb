module LoansHelper
	def translate_model_local
		translate_model(Loan)
	end
	alias_method :t_model_local, :translate_model_local

	def translate_models_local
		translate_models(Loan)
	end
	alias_method :t_models_local, :translate_models_local

	def translate_attribute_local(attribute)
		translate_attribute(Loan, attribute)
	end
	alias_method :t_attr_local, :translate_attribute_local
end
