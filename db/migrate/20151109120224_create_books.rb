class CreateBooks < ActiveRecord::Migration
  def self.up
    create_table :books do |t|
      t.string :title
      t.string :writer
      t.integer :pages
      t.integer :book_binding
      t.integer :copies

      t.timestamps
    end
  end

  def self.down
    drop_table :books
  end
end
