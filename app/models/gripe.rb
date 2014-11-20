class Gripe < ActiveRecord::Base
  attr_accessible :bus_stop, :comment, :gripe1, :gripe2, :gripe3, :gripe4, :map_lat, :map_long, :picture, :user_id, :bus_number, :location

  belongs_to :user

end
