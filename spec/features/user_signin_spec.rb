require "rails_helper"

RSpec.describe "User singing in" do

  before do
    # create User with FactoryGirl
    @user = create(:user)
  end

  scenario "successfully" do
    sign_in @user

    expect(page).to have_content @user.username
  end


  scenario "unsuccessfully" do
    visit new_user_session_path
    fill_in "Email", with: "wrongemail"
    fill_in "Password", with: "wrongpassword"
    click_on "Log in"

    expect(page).not_to have_content @user.username
  end

end
