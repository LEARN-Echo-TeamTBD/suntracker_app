require 'rails_helper'

RSpec.describe User, type: :model do
    let!(:user){User.create(name: "Kevin Bacon", email: "anthera@gmail.com", age: 22, password: "123456", skintone: 3, skin_cancer_history: false)}
    let!(:user1){User.new(name: "Julie Garlard", email: "anthera@gmail.com", age: 22, password: "123456", skintone: 3, skin_cancer_history: false)}
    let!(:id){user.id}


    describe "Model Users :" do
      it "is invalid with incomplete attributes" do
          expect(User.new({email: 'test@gmail.com', password:'learn123'})).to_not be_valid
      end
      it "is invalid without attributes" do
          expect(User.new).to_not be_valid
      end
      it "is valid with all attributes" do
          # expect(User.new({name: "Julie Garlard", email: "anthera@gmail.com", age: 22, password: "123456", skintone: 3, skin_cancer_history: false})).to be_valid
          expect(User.new({name: "Joyce Hee", email: "joycehee@gmail.com", age: 22, password: "123456", skintone: 3, skin_cancer_history: false})).to be_valid
      end
      it "has to return valid skintone" do
          expect(user.skintone).to be(3)
      end
      it "has to return valid id" do
          expect(user.id).to be(id)
      end
    end
end
