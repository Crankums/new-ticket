class CreateBikes < ActiveRecord::Migration[6.0]
  def change
    create_table :bikes do |t|
      t.string :make
      t.string :bike_model
      t.string :color
      t.timestamps
    end
  end
end
