class UsersController < ApplicationController
	load_and_authorize_resource

	def index
		@users = User.page(params[:page])
		respond_with @users
	end

	def show
		@user = User.find(params[:id])
		render_show @user
	end

	def create
		@user = User.new(resource_params)

		@user.save
		render_success_message @user
	end

	def update
		@user = User.find(params[:id])
		@user.update_attributes(resource_params)
		render_success_message @user
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy

		render_success_message @user
	end

	def me
		render_show current_user
	end
	
private
	def resource_params
		params.permit(user: permited_fields)[:user]
	end

	def permited_fields
		if current_user.is_employee
			User::PERMITED_FIELDS.clone << :is_employee
		else
			User::PERMITED_FIELDS
		end
	end

	def render_show(user)
		render partial: "users/user", locals: {
			user: user
		}
	end
end
