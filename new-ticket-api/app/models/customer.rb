class Customer < ApplicationRecord
    has_many :tickets
    has_many :bikes
end
