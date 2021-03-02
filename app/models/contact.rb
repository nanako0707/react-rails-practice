class Contact < ApplicationRecord
  validates :name, :email, :title, :content, presence: true
end
