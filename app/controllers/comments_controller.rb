class CommentsController < ApplicationController
  def create
    @blog = Blog.find(params[:blog_id])
    @comment = @blog.comments.create(params[:comment].permit(:name, :body))
    redirect_to blog_path(@blog)
  end
end
