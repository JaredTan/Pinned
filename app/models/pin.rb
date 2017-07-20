class Pin < ApplicationRecord

  validates :user, presence: :true

  belongs_to :user
  #
  # has_many :pinnings
  #
  # has_many :boards,
  #   through: :pinnings,
  #   source: :board
  #


end
