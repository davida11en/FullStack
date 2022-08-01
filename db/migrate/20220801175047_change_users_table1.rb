class ChangeUsersTable1 < ActiveRecord::Migration[5.2]
  def change

    remove_column :users, :first_name
    remove_column :users, :last_name

    add_column :users, :name, :string
    add_column :users, :phone, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
