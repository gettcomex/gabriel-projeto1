module CreatedBy
	extend ActiveSupport::Concern

	included do
		belongs_to :created_by,
	 		class_name: User.to_s,
	 		foreign_key: "created_by"

	 	before_create :set_created_by
	end

protected

	def set_created_by
		self.created_by = current_user
	end
end