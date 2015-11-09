class QueueOfBook < ActiveRecord::Base
	include CreatedBy
	include UpdateBy
	
	belongs_to :book
	belongs_to :user
end
