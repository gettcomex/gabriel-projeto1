module CreatedBy
	extend ActiveSupport::Concern

	included do
		belongs_to :created_by,
	 		class_name: User.to_s,
	 		foreign_key: "created_by"

	 	before_create :add_created_by
	end

private

	def add_created_by
		self.created_by = User.current if User.current.present?
	end

end