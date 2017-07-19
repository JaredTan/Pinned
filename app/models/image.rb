class Image < ActiveRecord::Base

  validates :url, presence: true

end
