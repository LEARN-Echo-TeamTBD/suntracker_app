require 'rails_helper'

RSpec.describe User, type: :model do
    let!(:user){User.create(name: "Ben Kevin", email: "anthera@gmail.com", age: 22, password: "123456", skintone: 3, skin_cancer_history: false)}
    let!(:id){user.id}


    describe "Model Users :" do
      it "is valid with valid attributes" do
          expect(User.new({email: 'test@gmail.com', password:'learn123'})).to be_valid
      end
      it "is invalid without attributes" do
          expect(User.new).to_not be_valid
      end
      it "has to return valid skintone" do
          expect(user.skintone).to be(3)
      end
      it "has to return valid id" do
          expect(user.id).to be(id)
      end
    end
end
