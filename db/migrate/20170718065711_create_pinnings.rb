class CreatePinnings < ActiveRecord::Migration
  def change
    create_table :pinnings do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false

      t.timestamps null: false
    end
  end
end
