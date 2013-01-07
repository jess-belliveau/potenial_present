class Present < ActiveRecord::Base
  attr_accessible :content, :user_id, :cost, :link

	belongs_to :user
end
