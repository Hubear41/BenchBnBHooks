class Api::BenchesController < ApplicationController
    def index
        debugger
        @benches = Bench.in_bounds(params[:bounds])

        unless params[:max_seating] == 10;
            @benches = @benches.select { |bench| bench.seats <= params[:max_seating] }
        end

        unless params[:min_seating] == 1
            @benches = @benches.select { |bench| bench.seats >= params[:min_seating] }
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
