class Bench < ApplicationRecord 
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        debugger
        north = bounds[:northEast][:lat]
        east = bounds[:northEast][:lng]
        south = bounds[:southWest][:lat]
        west = bounds[:southWest][:lng]

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