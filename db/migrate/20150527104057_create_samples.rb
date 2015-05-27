class CreateSamples < ActiveRecord::Migration
  def change
    create_table :samples do |t|
      t.string :name
      t.string :phone_number

      t.timestamps null: false
    end
  end
end
