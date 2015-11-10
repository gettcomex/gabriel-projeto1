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
end
