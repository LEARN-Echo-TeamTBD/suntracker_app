class UvApiController < ApplicationController
    @@xaccesstoken = 'aba42a00c60fabf67c1fc95632c69dc4'

    def api
        url = "https://api.openuv.io/api/v1/#{location_params['route']}?lat=#{location_params['latitude']}&lng=#{location_params['longitude']}"

        response = HTTParty.get(url, headers: {
          "Accept" => "application/json",
          'x-access-token' => @@xaccesstoken
        })

        render json: response.body, status: 200
    end

    private
    def location_params
        params.require(:uv_api).permit(:latitude, :longitude, :route)
    end
end
