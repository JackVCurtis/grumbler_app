class CreateGrumbles < ActiveRecord::Migration
  def change
    create_table :grumbles do |t|
      t.string :title
      t.string :author
      t.string :content
      t.string :avatar
    end
  end
end
