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
    password:'learn123'
  },
  {
    email: 'jimmy12@gmail.com',
    password: 'jimmy123'
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end
