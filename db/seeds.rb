# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user_attributes = [
  {
    email: 'learn@gmail.com',
    password:'learn123',
    name: "Ben Kevin",
    age: 22,
    skintone: 3,
    skin_cancer_history: false
  },
  {
    email: 'jimmy12@gmail.com',
    password: 'jimmy123',
    name: "Jimmy",
    age: 24,
    skintone: 1,
    skin_cancer_history: true
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end
