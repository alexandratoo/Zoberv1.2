require 'test_helper'

class BlogControllerTest < ActionDispatch::IntegrationTest
  test "should get post" do
    get blog_post_url
    assert_response :success
  end

  test "should get each_post" do
    get blog_each_post_url
    assert_response :success
  end

end
