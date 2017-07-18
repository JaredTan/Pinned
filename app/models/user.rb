class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

	def self.find_by_credentials(username, password)
		user = User.find_by_username(username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by_session_token(self.session_token)
			self.session_token = new_session_token
		end
	end

end
