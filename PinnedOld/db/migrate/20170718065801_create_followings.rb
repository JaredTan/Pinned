class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :following_id, null: false
      t.integer :follower_id, null: false

      t.timestamps null: false
    end
  end
end
