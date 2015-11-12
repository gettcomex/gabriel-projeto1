class UsersController < ApplicationController
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
		@user = User.new(params[:user])

		flash[:notice] = t_successfully_created_local if @user.save
		respond_with @user
	end

	def update
		@user = User.find(params[:id])
		flash[:notice] = t_successfully_updated_local if @user.update_attributes(params[:user])
		respond_with @user
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		flash[:alerts] = @user.flash_alerts
		respond_with @user
	end
end
