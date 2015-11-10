# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

ActiveRecord::Base.transaction do
	
	User.create!(
		name: "employee",
		email: "employee@gmail.com",
		password: "123456",
		password_confirmation: "123456",
		is_employee: true
	)

	User.create!(
		name: "normal",
		email: "normal@gmail.com",
		password: "123456",
		password_confirmation: "123456",
		is_employee: false
	)
end