class AddUpdateByToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :update_by, :integer
  end

  def self.down
    remove_column :users, :update_by
  end
end
