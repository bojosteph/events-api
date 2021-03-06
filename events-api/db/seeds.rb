# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
event1 = Event.create(name: " Chattoga County Health Fair",  location: "Summerville Senior Center", description: "Education and Inservice about Hypertension with Free Health Screen", start_date: Faker::Date.forward(23), end_date: Faker::Date.forward(33))
event2 = Event.create(name: " Boxing for Winners not Weiners",  location: "Phillips Center", description: "Boxing Conference to use Boxing to lose weight and train not to get beat up in a fight ", start_date: Faker::Date.forward(60), end_date: Faker::Date.forward(70))
event3 = Event.create(name: " Candy Event", location: "Willy Wonka Factory", description: "For The love of Candy , Candy Making and Technique", start_date: Faker::Date.forward(5), end_date: Faker::Date.forward(30))
event4 = Event.create(name: " Floyd County Fair",  location: "Floyd Park Center", description: "Its The COUNTY fair , Funnel Cake and Safe rides ", start_date: Faker::Date.forward(8), end_date: Faker::Date.forward(18))
event5 = Event.create(name: " Playoff Basketball",  location: "Phillips Center", description: "Eastern  Conference Finals ", start_date: Faker::Date.forward(36), end_date: Faker::Date.forward(45))
event6 = Event.create(name: " Meetup Event", location: "Starbucks Cheesecake Factory", description: "Tech Meetup and dessert", start_date: Faker::Date.forward(2), end_date: Faker::Date.forward(10))

