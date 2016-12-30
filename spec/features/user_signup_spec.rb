require "rails_helper"

RSpec.describe "User singing up" do
  scenario "successfully" do
    visit new_user_registration_path
    fill_in "Username", with: "exampleuser"
    fill_in "Email", with: "example@gmail.com"
    fill_in "Password", with: "123456password"
    fill_in "Password confirmation", with: "123456password"
    click_on "Sign up"

    expect(page).to have_content "exampleuser"
  end


  scenario "unsuccessfully" do
    visit new_user_registration_path
    fill_in "Username", with: "exampleuser"
    fill_in "Email", with: "example@gmail.com"
    fill_in "Password", with: ""
    fill_in "Password confirmation", with: ""
    click_on "Sign up"

    expect(page).to have_content "error"
  end

end
