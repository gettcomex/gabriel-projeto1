class CreateQueueOfBooks < ActiveRecord::Migration
  def self.up
    create_table :queue_of_books do |t|
      t.references :book
      t.references :user

      t.timestamps
    end
  end

  def self.down
    drop_table :queue_of_books
  end
end
