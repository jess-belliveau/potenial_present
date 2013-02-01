class Present < ActiveRecord::Base
  attr_accessible :content, :user_id, :cost, :link, :purchased, :ordered

	validates :content, presence: true
	validates :link, presence: true

	belongs_to :user
end
