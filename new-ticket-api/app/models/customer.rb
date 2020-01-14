class Customer < ApplicationRecord
    has_many :tickets
    has_many :bikes

    validates :email, uniqueness: true
end
