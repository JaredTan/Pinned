class Board < ActiveRecord::Base

  include PgSearch
  multisearchable :against => :title
  pg_search_scope :whose_title_starts_with, against: :title, using: {tsearch: {prefix: true} }

  validates :owner, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :pinnings, dependent: :destroy

  has_many :pins,
    through: :pinnings,
    source: :pin

end
