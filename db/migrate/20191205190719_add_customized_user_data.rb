class AddCustomizedUserData < ActiveRecord::Migration[6.0]
  def change
      add_column :users, :name, :string
      add_column :users, :age, :integer
      add_column :users, :skintone, :integer
      add_column :users, :skin_cancer_history, :boolean
  end
end
