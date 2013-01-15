class User < ActiveRecord::Base
  attr_accessible :email, :name, :password, :password_confirmation
	has_secure_password

	has_many :presents

	VALID_NAME = /\A[a-zA-Z0-9_]{2,30}\Z/
  validates :name, presence: true, length: { maximum: 50 }, format: { with: VALID_NAME }, uniqueness: { case_sensitive: false }
	validates :email, presence: true, uniqueness: { case_sensitive: false }
	validates :password_confirmation, presence: true
	validates :password, presence: true, length: { minimum: 6 }

	before_save { self.email.downcase! } 
	before_save { self.name = self.name.slice(0,1).capitalize + self.name.slice(1..-1) }
  before_save :create_remember_token

  private

	  def create_remember_token
	    self.remember_token = SecureRandom.hex
	  end

end
