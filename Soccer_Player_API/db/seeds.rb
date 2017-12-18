# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
positions = ['GK', 'CB', 'LB', 'RB', 'CM', 'LM', 'RM', 'ST']
player_number = (1..25).to_a
player_names = ['Diego','Alona','Genevieve','Mimi','James','Ryan','Cody','Dick','Matteo','Fabiano','Liam','Winter','Brandon','Shirley','Dakota','Eliza','Jordan','Abe','Lina','Brian','Todd','Yassi']

21.times do
  Player.create(:name=>player_names.sample, :number=>player_number.sample, :position => positions.sample)
end
