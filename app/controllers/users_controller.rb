class UsersController < ApplicationController
	load_and_authorize_resource

	def index
		@users = User.page(params[:page])
		respond_with @users
	end

	def show
		@user = User.find(params[:id])
		respond_with @user
	end

	def new
		@user = User.new
		respond_with @user
	end

	def edit
		@user = User.find(params[:id])
	end

	def create
		@user = User.new(resource_params)

		flash[:notice] = t_successfully_created_local if @user.save
		respond_with @user
	end

	def update
		@user = User.find(params[:id])
		flash[:notice] = t_successfully_updated_local if @user.update_attributes(resource_params)
		respond_with @user
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		flash[:alerts] = @user.flash_alerts
		respond_with @user
	end

	def me
		render partial: "users/user", locals: { user: current_user }
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
end
