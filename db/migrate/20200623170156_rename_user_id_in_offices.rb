class RenameUserIdInOffices < ActiveRecord::Migration[6.0]
  def change
    rename_column :offices, :user_id, :owner_id
  end
end
