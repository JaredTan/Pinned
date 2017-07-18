class Following < ActiveRecord::Base

  validates :follower, :followee, presence: true

  belongs_to :follower
    foreign_key: :follower_id,
    primary_key: :id,
    class_name: :User

  belongs_to :followee
    foreign_key: :following_id,
    primary_key: :id,
    class_name: :User

end
