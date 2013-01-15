class Present < ActiveRecord::Base
  attr_accessible :content, :user_id, :cost, :link, :purchased

	validates :content, presence: true

	belongs_to :user
end
