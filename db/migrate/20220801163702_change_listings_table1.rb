class ChangeListingsTable1 < ActiveRecord::Migration[5.2]
  def change

    remove_column :listings, :lat
    remove_column :listings, :lng
  end
end
