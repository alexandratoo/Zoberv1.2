class BlogsController < ApplicationController

  def index
  end
  def new
  end
  def create
    @blog = Blog.new(blog_params)

    @blog.save(validate: false)
    redirect_to @blog
  end
  def show
    @blog = Blog.find(params[:id])
  end
  private
  def blog_params
    params.require(:blog).permit(:title, :post, :name, :website)
end
end
