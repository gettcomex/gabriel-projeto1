class Book < ActiveRecord::Base
	include CreatedBy
	include UpdateBy

	validates_presence_of :title, :writer, :book_binding, :pages, :copies

	#paginates_per 1
end
