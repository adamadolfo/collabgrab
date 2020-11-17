# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Skill.destroy_all()

(200).times do 
    Skill.create(name: Faker::Job.field)
end

# anney = User.create(first_name: "anney", last_name:"park", username: "anneypark", password: "anneypark")
