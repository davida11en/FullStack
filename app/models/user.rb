class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, uniqueness:true 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: { minimum: 6 }, allow_nil: true
     
    after_initialize :ensure_session_token 

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email) 
        
        if user && user.is_password?(password)
            user 
        else   
            nil
        end 
    end
    
    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def is_password?(password)
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64 
        self.save!
        self.session_token 
    end

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end