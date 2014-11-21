class Gripe < ActiveRecord::Base
  attr_accessible :bus_stop, :comment, :gripe1, :gripe2, :gripe3, :gripe4, :latitude, :longitude, :picture, :user_id, :bus_number, :address

  belongs_to :user

  geocoded_by :address
  after_validation :geocode 

end
