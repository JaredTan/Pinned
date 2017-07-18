class Pinning < ActiveRecord::Base
  validates :pin, :board, presence: true

  belongs_to :pin

  belongs_to :board

end
