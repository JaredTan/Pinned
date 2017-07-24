class Pin < ActiveRecord::Base
  validates :owner, presence: :true

  belongs_to :owner,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  has_many :pinnings, dependent: :destroy

  has_many :boards,
    through: :pinnings,
    source: :board



end
