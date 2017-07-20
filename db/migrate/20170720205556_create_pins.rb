class CreatePins < ActiveRecord::Migration[5.1]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :url
      t.string :image_url, null: false
      t.text :description
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
