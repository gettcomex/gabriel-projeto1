module ApplicationHelper
	def error_messages_for(resource)
		render partial: "shared/error_messages", locals: {
			resource: resource
		}
	end

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
end
