class AddUvToUventries < ActiveRecord::Migration[6.0]
  def change
    add_column :uventries, :uv, :integer
    add_column :uventries, :uv_max, :integer
    add_column :uventries, :safe_exposure_time, :string
  end
end
