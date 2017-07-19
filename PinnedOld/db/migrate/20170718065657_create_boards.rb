class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.text :description
      t.integer :user_id, null: false
      t.boolean :secret, null: false, default: false

      t.timestamps null: false
    end
  end
end
