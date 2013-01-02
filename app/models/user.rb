class User < ActiveRecord::Base
  attr_accessible :email, :name, :password, :password_confirmation
	has_secure_password

	has_many :presents

  validates :name, presence: true, length: { maximum: 50 }
	validates :email, presence: true, uniqueness: { case_sensitive: false }
	validates :password_confirmation, presence: true
	validates :password, presence: true, length: { minimum: 6 }

	before_save { self.email.downcase! } 
  before_save :create_remember_token

  private

	  def create_remember_token
	    self.remember_token = SecureRandom.hex
	  end

end
