class AddCreatedByToQueueOfBooks < ActiveRecord::Migration
  def self.up
    add_column :queue_of_books, :created_by, :integer
  end

  def self.down
    remove_column :queue_of_books, :created_by
  end
end
