class Api::BenchesController < ApplicationController
    def index
        @benches = Bench.in_bounds(params[:bounds])

        max = params[:max_seating].to_i
        min = params[:min_seating].to_i

        unless max == 10;
            @benches = @benches.select { |bench| bench.seats <= max }
        end

        unless min == 1
            @benches = @benches.select { |bench| bench.seats >= min }
        end

        render :index
    end

    def create
        @bench = Bench.new(bench_params);

        if @bench.save
            render :show
        else
            render json: @bench.errors.full_messages
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :lat, :lng, :seats, :max_seating, :min_seating);
    end
end
