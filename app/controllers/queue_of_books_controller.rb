class QueueOfBooksController < ApplicationController
  # GET /queue_of_books
  # GET /queue_of_books.xml
  def index
    @queue_of_books = QueueOfBook.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @queue_of_books }
    end
  end

  # GET /queue_of_books/1
  # GET /queue_of_books/1.xml
  def show
    @queue_of_book = QueueOfBook.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @queue_of_book }
    end
  end

  # GET /queue_of_books/new
  # GET /queue_of_books/new.xml
  def new
    @queue_of_book = QueueOfBook.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @queue_of_book }
    end
  end

  # GET /queue_of_books/1/edit
  def edit
    @queue_of_book = QueueOfBook.find(params[:id])
  end

  # POST /queue_of_books
  # POST /queue_of_books.xml
  def create
    @queue_of_book = QueueOfBook.new(params[:queue_of_book])

    respond_to do |format|
      if @queue_of_book.save
        format.html { redirect_to(@queue_of_book, :notice => 'Queue of book was successfully created.') }
        format.xml  { render :xml => @queue_of_book, :status => :created, :location => @queue_of_book }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @queue_of_book.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /queue_of_books/1
  # PUT /queue_of_books/1.xml
  def update
    @queue_of_book = QueueOfBook.find(params[:id])

    respond_to do |format|
      if @queue_of_book.update_attributes(params[:queue_of_book])
        format.html { redirect_to(@queue_of_book, :notice => 'Queue of book was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @queue_of_book.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /queue_of_books/1
  # DELETE /queue_of_books/1.xml
  def destroy
    @queue_of_book = QueueOfBook.find(params[:id])
    @queue_of_book.destroy

    respond_to do |format|
      format.html { redirect_to(queue_of_books_url) }
      format.xml  { head :ok }
    end
  end
end
