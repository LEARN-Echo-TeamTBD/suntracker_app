class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

    validates :name, :age, :skintone, presence: true
    validates :skin_cancer_history, inclusion: { in: [true, false] }

    has_many :uventry
end
