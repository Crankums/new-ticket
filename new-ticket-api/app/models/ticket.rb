class Ticket < ApplicationRecord
    belongs_to :customer

    validates :labor, presence: true
end
