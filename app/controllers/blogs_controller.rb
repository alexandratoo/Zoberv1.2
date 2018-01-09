class BlogsController < ApplicationController
  before_action :find_blog, only: [:show, :edit, :update, :destroy]
  def index
    @blogs = Blog.all
  end
  def show
    @blog = Blog.find(params[:id])
  end
  def new
    @blog = Blog.new
  end
  def create
    @blog = Blog.new
    if @blog.save(blog_params)
      flash[:notice] = "Successfully created post!"
       render :index
    else
      flash[:alert] = "Error creating new post!"
     render :new
    end
  end
  def edit
  end
  def update
    if @blog.update_attributes(blog_params)
      redirect_to @blog, notice: "Update successful"
    else
      flash[:alert] ="Error updating blog"
      render 'edit'
    end
  end
  def destroy
    @blog.destroy redirect_to root_path, notice: "Blog entry destroyed"
  end
private
def blog_params
  params.require(:blog).permit(:title, :body)
end

def find_blog
  @blog = Blog.find(params[:id])
end
end
