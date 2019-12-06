class CreateUventries < ActiveRecord::Migration[6.0]
  def change
    create_table :uventries do |t|
      t.integer :hours_in_sun
      t.boolean :sun_block_application
      t.integer :lattitude
      t.integer :longitude
      t.string :time_of_day

      t.timestamps
    end
  end
end
