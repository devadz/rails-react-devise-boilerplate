FactoryGirl.define do

  factory :user do
    # create dummy user with Faker gem
    username { Faker::Internet.user_name }
    email { Faker::Internet.email }
    password { Faker::Internet.password }
  end

end
