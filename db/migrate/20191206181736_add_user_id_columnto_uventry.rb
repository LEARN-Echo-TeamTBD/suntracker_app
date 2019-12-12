class AddUserIdColumntoUventry < ActiveRecord::Migration[6.0]
  def change
      add_column :uventries, :user_id, :integer
  end
end
