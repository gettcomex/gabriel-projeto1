module UpdateBy
	extend ActiveSupport::Concern

	included do
		belongs_to :update_by,
	 		class_name: User.to_s,
	 		foreign_key: "update_by"

	 	before_create :set_update_by
	end

protected

	def set_update_by
		self.update_by = current_user
	end
end