class AddOccurenceToGripes < ActiveRecord::Migration
  def change
    add_column :gripes, :occurence, :datetime
  end
end
