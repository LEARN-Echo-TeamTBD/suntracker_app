class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  @minimum_password_length = 10
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
