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
    name: "Stephan Ripper",
    age: 24,
    skintone: 1,
    skin_cancer_history: true
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end

id = User.all().last

uventry_attributes = [
    {
        hours_in_sun: 1.5,
        sun_block_application: false,
        lattitude: 32.7157,
        longitude: -117.1611,
        time_of_day: 'm',
        user_id: id
    },
    {
        hours_in_sun: 2,
        sun_block_application: true,
        lattitude: 32.7157,
        longitude: -117.1611,
        time_of_day: 'm',
        user_id: id
    }
]

uventry_attributes.each do |attributes|
  Uventry.create(attributes)
end
