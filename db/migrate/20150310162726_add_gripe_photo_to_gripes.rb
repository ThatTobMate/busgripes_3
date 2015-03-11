class AddGripePhotoToGripes < ActiveRecord::Migration
  def change
    add_column :gripes, :gripe_photo, :string
  end
end
