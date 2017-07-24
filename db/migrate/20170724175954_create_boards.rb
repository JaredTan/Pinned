class CreateBoards < ActiveRecord::Migration[5.1]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
