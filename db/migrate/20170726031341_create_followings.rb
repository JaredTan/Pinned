class CreateFollowings < ActiveRecord::Migration[5.1]
  def change
    create_table :followings do |t|
      t.integer :followee_id, null: false
      t.integer :follower_id, null: false

      t.timestamps
    end
    add_index :followings, [:followee_id, :follower_id], unique: true
  end
end
