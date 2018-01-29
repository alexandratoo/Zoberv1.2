class BlogsController < ApplicationController

  def index
    @blogs = Blog.all.order('created_at DESC')
  end
  def new
    @blog = Blog.new
  end
  def create
    @blog = Blog.new(blog_params)

    @blog.save(validate: false)
    redirect_to @blog

  end

  def show
    @blog = Blog.find(params[:id])
  end
  def edit
    @blog = Blog.find(params[:id])
  end
  def update
    @blog = Blog.find(params[:id])

if @blog.update(params[:blog].permit(:image, :title, :post, :name, :website))

  redirect_to @blog
else
  render 'edit'
end
  end
  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to blogs_path
  end



def archive
  #this will return a hash in which the month names are the keys,
  #and the values are arrays of the posts belonging to such months
  #something like:
  #{ "February" => [#<Post 0xb5c836a0>,#<Post 0xb5443a0>],

  @blogs_by_month = Blog.find(:all).group_by { |blog| blog.created_at.strftime("%B") }
end
  private
  def blog_params
    params.require(:blog).permit(:image, :title, :post, :name, :website, )
end
end
