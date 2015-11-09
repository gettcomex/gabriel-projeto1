class AddUpdateByToQueueOfBooks < ActiveRecord::Migration
  def self.up
    add_column :queue_of_books, :update_by, :integer
  end

  def self.down
    remove_column :queue_of_books, :update_by
  end
end
