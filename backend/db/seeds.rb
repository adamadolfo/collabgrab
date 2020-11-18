# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
Skill.destroy_all
Project.destroy_all()
User.destroy_all()
Project.destroy_all()
UserSkill.destroy_all()
ProjectSkill.destroy_all()
Collaboration.destroy_all()


(200).times do 
    Skill.create(name: Faker::Job.field)
end

(10).times do 
    User.create(name: Faker::TvShows::RuPaul.queen, username: Faker::Esport.player, password: "password")
end

project1 = Project.create(name: "create a card game", details: "I want to create a trading card game with physical cards, looking for collaboration to print, trademark, draw and market", location: "maryland")
project2 = Project.create(name: "tech startup", details: "need a few web developers to work on a brand new startup, can collaborate from home and we can discuss compensation.", location: "remote")
project3 = Project.create(name: "project3", details: "details about project 3", location: "state or country")
project4 = Project.create(name: "xyz", details: "xyz", location: "xyz")
project5 = Project.create(name: "turn basement into movie theatre", details: "need someone with electritian backround to help me wire up", location: "wherever")


UserSkill.create(user_id: rand(63..73), skill_id: rand(1751..1780))
UserSkill.create(user_id: rand(63..73), skill_id: rand(1751..1780))
UserSkill.create(user_id: rand(63..73), skill_id: rand(1751..1780))
UserSkill.create(user_id: rand(63..73), skill_id: rand(1751..1780))
UserSkill.create(user_id: rand(63..73), skill_id: rand(1751..1780))
UserSkill.create(user_id: rand(63..73), skill_id: rand(1751..1780))

ProjectSkill.create(project_id: project1, skill_id: rand(1751..1780))
ProjectSkill.create(project_id: project1, skill_id: rand(1751..1780))
ProjectSkill.create(project_id: project2, skill_id: rand(1751..1780))

Collaboration.create(user_id: rand(63..73), project_id: project1)
Collaboration.create(user_id: rand(63..73), project_id: project1)
Collaboration.create(user_id: rand(63..73), project_id: project1)

