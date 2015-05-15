class AddPhoneNumberToSamples < ActiveRecord::Migration
  def change
    add_column :samples, :phone_number, :string
  end
end
