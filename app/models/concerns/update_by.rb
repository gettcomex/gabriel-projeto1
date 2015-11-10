module UpdateBy
	extend ActiveSupport::Concern

	included do
		belongs_to :update_by,
	 		class_name: User.to_s,
	 		foreign_key: "update_by"

	 	before_save :add_update_by
	end

private

	def add_update_by
		self.update_by = User.current if User.current.present?
	end
end