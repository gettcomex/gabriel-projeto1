class AddCreatedByToBook < ActiveRecord::Migration
  def self.up
    add_column :books, :created_by, :integer
  end

  def self.down
    remove_column :books, :created_by
  end
end
