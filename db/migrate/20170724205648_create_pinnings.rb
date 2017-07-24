class CreatePinnings < ActiveRecord::Migration[5.1]
  def change
    create_table :pinnings do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false

      t.timestamps
    end
    add_index :pinnings, [:pin_id, :board_id], unique: true
  end
end
