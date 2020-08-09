class CreateStaffs < ActiveRecord::Migration[6.0]
  def change
    create_table :staffs do |t|
      t.string :name
      t.integer :age
      t.integer :sex
      t.integer :group_id
      t.string :password

      t.timestamps
    end
  end
end
