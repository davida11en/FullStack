# == Schema Information
#
# Table name: listings
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  address        :string           not null
#  neighborhood   :string           not null
#  zip            :integer          not null
#  price          :integer          not null
#  property_type  :string
#  owner_id       :integer          not null
#  bedrooms       :integer          not null
#  bathrooms      :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :float
#  lng            :float
#  description    :text             default(""), not null
#  rent_bool      :boolean          default(FALSE)
#  borough        :string           default("Brooklyn")
#  favorite_count :integer          default(0)
#
class Listing < ApplicationRecord
    validates :name, :address, :neighborhood, :borough, :zip, :owner_id, :price, :bedrooms, :bathrooms, presence: true

    belongs_to :owner, class_name: "User", foreign_key: "owner_id"

end
