class ChangeUvDataToFloats < ActiveRecord::Migration[6.0]
  def up
    change_table :uventries do |t|
      t.rename :lattitude, :latitude
      t.change :latitude, :float
      t.change :longitude, :float
      t.change :uv, :float
      t.change :uv_max, :float
      t.change :safe_exposure_time, :float
    end
  end

  def down
    change_table :uventries do |t|
      t.change :lattitude, :integer
      t.change :longitude, :integer
      t.change :uv, :integer
      t.change :uv_max, :integer
      t.change :safe_exposure_time, :integer
    end
  end
end
