class MapsController < ApplicationController

  def index
    @gripe = Gripe.new
    @gripes = Gripe.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gripes }
    end  
    
  end

end