class CreateGripes < ActiveRecord::Migration
  def change
    create_table :gripes do |t|
      t.integer :user_id
      t.string :gripe1
      t.string :gripe2
      t.string :gripe3
      t.string :gripe4
      t.text :picture
      t.text :comment
      t.string :bus_stop
      t.float :latitude
      t.float :longitude
      t.string :bus_number
      t.text :address

      t.timestamps
    end
  end
end
