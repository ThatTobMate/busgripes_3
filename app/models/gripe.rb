class Gripe < ActiveRecord::Base
  attr_accessible :bus_stop, :comment, :gripe1, :gripe2, :gripe3, :gripe4, :latitude, :longitude, :picture, :user_id, :bus_number, :address, :registration, :occurence, :gripe_photo

  mount_uploader :gripe_photo, GripePhotoUploader 

  belongs_to :user

  geocoded_by :address
  reverse_geocoded_by :latitude, :longitude, :address => :address

  after_validation :geocode, :reverse_geocode # auto-fetch address 


end
