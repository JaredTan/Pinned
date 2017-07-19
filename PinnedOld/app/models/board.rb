class Board < ActiveRecord::Base
  validates :user, presence: true

  belongs_to :user

  has_many :pinnings

  has_many :pins
    through: :pinnings,
    source: :pin

end
