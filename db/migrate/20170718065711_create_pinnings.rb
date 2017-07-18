class CreatePinnings < ActiveRecord::Migration
  def change
    create_table :pinnings do |t|

      t.timestamps null: false
    end
  end
end
