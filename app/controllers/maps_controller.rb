class MapsController < ApplicationController

  def index
    @input = params[:gripe_map_select]
    if @input == 0
      flash[:notice] = "Please choose a gripe!"
    elsif @input == 1
      @gripes = Gripe.all
    else
      @gripes = Gripe.where(gripe1: @input) + Gripe.where(gripe2: @input) + Gripe.where(gripe3: @input) + Gripe.where(gripe4: @input)
    end
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gripes }
    end  
  end
  
end