module TranslateHelper
	def translate_model(model)
		model.model_name.human
	end
	alias_method :t_model, :translate_model

	def translate_models(model)
		model.model_name.human(count: 2)
	end
	alias_method :t_models, :translate_models

	def translate_attribute(model, attribute)
		model.human_attribute_name(attribute)
	end
	alias_method :t_attr, :translate_attribute

	def translate_successfully_created(model)
		t(:successfully_created, model: model.model_name.human)
	end
	alias_method :t_successfully_created, :translate_successfully_created

	def translate_successfully_updated(model)
		t(:successfully_updated, model: model.model_name.human)
	end
	alias_method :t_successfully_created, :translate_successfully_updated

	def model_local
		controller_name.classify.constantize
	end

	def translate_model_local
		translate_model(model_local)
	end
	alias_method :t_model_local, :translate_model_local

	def translate_models_local
		translate_models(model_local)
	end
	alias_method :t_models_local, :translate_models_local

	def translate_attribute_local(attribute)
		translate_attribute(model_local, attribute)
	end
	alias_method :t_attr_local, :translate_attribute_local

	def translate_successfully_created_local
		t(:successfully_created, model: model_local.model_name.human)
	end
	alias_method :t_successfully_created_local, :translate_successfully_created_local

	def translate_successfully_updated_local
		t(:successfully_updated, model: model_local.model_name.human)
	end
	alias_method :t_successfully_updated_local, :translate_successfully_updated_local
end