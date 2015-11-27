class ApplicationController < ActionController::Base
	include TranslateHelper
	include CanCan::ControllerAdditions
	
	protect_from_forgery

	before_filter :authenticate_user!, :set_current_user

	respond_to :json, :xml

protected
	def render_success_message(resource)
		render partial: "shared/success_message", locals: { resource: resource }
	end

private
	def set_current_user
		User.current = current_user
	end
end
