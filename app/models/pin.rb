class Pin < ActiveRecord::Base

  include PgSearch
  multisearchable :against => :title
  pg_search_scope :whose_title_starts_with, against: :title, using: {tsearch: {prefix: true} }

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
