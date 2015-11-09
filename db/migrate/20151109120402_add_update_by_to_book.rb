class AddUpdateByToBook < ActiveRecord::Migration
  def self.up
    add_column :books, :update_by, :integer
  end

  def self.down
    remove_column :books, :update_by
  end
end
