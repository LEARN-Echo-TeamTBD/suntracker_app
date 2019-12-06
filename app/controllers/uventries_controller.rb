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
end
