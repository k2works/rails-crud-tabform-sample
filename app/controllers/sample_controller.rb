class SampleController < ApplicationController
  before_action :set_sample, only: [:show, :edit, :update, :destroy]
  def index
    @samples = Sample.all
  end

  def show
    redirect_to sample_index_path
  end

  def new 
    @sample = Sample.new
  end
  
  def create
    @sample = Sample.new(sample_params)
    
    respond_to do |format|
      if @sample.save
        format.html { redirect_to @sample, notic: 'Sample was successfully created.'}
      else
        format.html { render action: 'new'}
      end
    end
  end
  
  private
  def set_sample
    @sample = Sample.find(params[:id])
  end

  def sample_params
    params.require(:sample).permit(:name)
  end
end
