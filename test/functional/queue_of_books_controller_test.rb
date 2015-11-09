require 'test_helper'

class QueueOfBooksControllerTest < ActionController::TestCase
  setup do
    @queue_of_book = queue_of_books(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:queue_of_books)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create queue_of_book" do
    assert_difference('QueueOfBook.count') do
      post :create, :queue_of_book => @queue_of_book.attributes
    end

    assert_redirected_to queue_of_book_path(assigns(:queue_of_book))
  end

  test "should show queue_of_book" do
    get :show, :id => @queue_of_book.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @queue_of_book.to_param
    assert_response :success
  end

  test "should update queue_of_book" do
    put :update, :id => @queue_of_book.to_param, :queue_of_book => @queue_of_book.attributes
    assert_redirected_to queue_of_book_path(assigns(:queue_of_book))
  end

  test "should destroy queue_of_book" do
    assert_difference('QueueOfBook.count', -1) do
      delete :destroy, :id => @queue_of_book.to_param
    end

    assert_redirected_to queue_of_books_path
  end
end
