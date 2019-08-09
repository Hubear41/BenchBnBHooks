class UpdateBenchesWithSeats < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seats, :integer, null: false
  end
end
