class UventriesController < ApplicationController
    def index
        @current_user = params[:user_id]
        uventries = Uventry.where(user_id: @current_user)
        if uventries.any?
            render json: uventries, status: 200
        else
            render json: uventries, status: 404
        end
    end

    def create
        new_uventry = Uventry.new(entry_params)
        if new_uventry.save
            render json: new_uventry, status: 201
        else
            render json: new_uventry.errors, status: 422
        end
    end

    private
    def entry_params
        params.require(:uventry).permit(:user_id, :hours_in_sun, :sun_block_application, :lattitude, :longitude, :time_of_day)
    end
end
