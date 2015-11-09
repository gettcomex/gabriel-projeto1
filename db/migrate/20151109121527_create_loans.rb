class CreateLoans < ActiveRecord::Migration
  def self.up
    create_table :loans do |t|
      t.references :book
      t.references :user
      t.date :starts_at
      t.date :end_at
      t.integer :created_by
      t.integer :update_by

      t.timestamps
    end
  end

  def self.down
    drop_table :loans
  end
end
