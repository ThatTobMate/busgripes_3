require 'test_helper'

class GripesControllerTest < ActionController::TestCase
  setup do
    @gripe = gripes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:gripes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create gripe" do
    assert_difference('Gripe.count') do
      post :create, gripe: { bus_stop: @gripe.bus_stop, comment: @gripe.comment, gripe1: @gripe.gripe1, gripe2: @gripe.gripe2, gripe3: @gripe.gripe3, gripe4: @gripe.gripe4, map_lat: @gripe.map_lat, map_long: @gripe.map_long, picture: @gripe.picture }
    end

    assert_redirected_to gripe_path(assigns(:gripe))
  end

  test "should show gripe" do
    get :show, id: @gripe
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @gripe
    assert_response :success
  end

  test "should update gripe" do
    put :update, id: @gripe, gripe: { bus_stop: @gripe.bus_stop, comment: @gripe.comment, gripe1: @gripe.gripe1, gripe2: @gripe.gripe2, gripe3: @gripe.gripe3, gripe4: @gripe.gripe4, map_lat: @gripe.map_lat, map_long: @gripe.map_long, picture: @gripe.picture }
    assert_redirected_to gripe_path(assigns(:gripe))
  end

  test "should destroy gripe" do
    assert_difference('Gripe.count', -1) do
      delete :destroy, id: @gripe
    end

    assert_redirected_to gripes_path
  end
end
