require 'rails_helper'

RSpec.describe "Uventries", type: :request do
    let!(:user){User.create(
      email: 'jimmy12@gmail.com',
      password: 'jimmy123',
      name: "Stephan Ripper",
      age: 24,
      skintone: 1,
      skin_cancer_history: true
    )}
    let(:user_id){user.id}
    let!(:uventry1){Uventry.create(
        hours_in_sun: 2,
        sun_block_application: true,
        lattitude: 32.7157,
        longitude: -117.1611,
        time_of_day: 'm',
        user_id: user.id
    )}
    let!(:uventry2){Uventry.create(
        hours_in_sun: 1.3,
        sun_block_application: false,
        lattitude: 32.7157,
        longitude: -117.1611,
        time_of_day: 'm',
        user_id: user.id
    )}

    describe "GET /users/:user_id/uventries" do
        before { get "/users/#{user_id}/uventries"  }

        context 'when a uventry exists' do
            it "should not be empty" do
                expect(JSON.parse(response.body)).not_to be_empty
            end
            it "should json response be length of 2" do
                expect(JSON.parse(response.body)).not_to be_empty
            end
        end
        context 'when a user does not exist' do
            let(:user_id) {-11}
            it "returns status code 404" do
                expect(response).to have_http_status(404)
            end
        end
    end
end