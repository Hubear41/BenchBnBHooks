class Bench < ApplicationRecord 
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        north = bounds.northEast.lat
        east = bounds.northEast.lng
        south = bounds.southWest.lat
        west = bounds.sourthWest.lng

        Bench.where("benches.lat <= ? &&
                     benches.lat >= ? &&
                     benches.lng <= ? &&
                     benches.lng >= ?",
                     north,
                     south,
                     east,
                     west)
    end
end