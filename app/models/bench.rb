class Bench < ApplicationRecord 
    validates :description, :lat, :lng, presence: true
    validates :seats, presence: true, inclusion: { in: 1..10 }

    def self.in_bounds(bounds)
        north = bounds[:northEast][:lat]
        east = bounds[:northEast][:lng]
        south = bounds[:southWest][:lat]
        west = bounds[:southWest][:lng]

        Bench.where("benches.lat <= ? AND
                     benches.lat >= ? AND
                     benches.lng <= ? AND
                     benches.lng >= ?",
                     north.to_f,
                     south.to_f,
                     east.to_f,
                     west.to_f)
    end
end