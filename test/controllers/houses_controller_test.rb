require 'test_helper'

class HousesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get houses_home_url
    assert_response :success
  end

end
