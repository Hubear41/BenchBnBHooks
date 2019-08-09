# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all
User.destroy_all

User.create(username: "admin", password: "password")

Bench.create(description: "Forest Hill side bench", lat: 37.746500, lng: -122.458889, seats: 2)
Bench.create(description: "Twin Peaks bench",       lat: 37.746500, lng: -122.458889, seats: 5)
Bench.create(description: "Sutro Reservoir bench",  lat: 37.752508, lng: -122.453181, seats: 2)
Bench.create(description: "Holy bench",             lat: 37.750039, lng: -122.461160, seats: 2)
Bench.create(description: "Quiet Park Bench",       lat: 37.751790, lng: -122.465243, seats: 4)
Bench.create(description: "Missile Test Bench",     lat: 37.758147, lng: -122.457200, seats: 3)
Bench.create(description: "CAS campus bench",       lat: 37.770103, lng: -122.466632, seats: 1)
Bench.create(description: "Tennis Bench",           lat: 37.798850, lng: -122.459397, seats: 2)
Bench.create(description: "bench next to ghandi",   lat: 37.795231, lng: -122.392418, seats: 1)
Bench.create(description: "bridge bench",           lat: 37.798086, lng: -122.377929, seats: 3)
