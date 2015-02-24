class AddRegistrationToGripes < ActiveRecord::Migration
  def change
    add_column :gripes, :registration, :string
  end
end
