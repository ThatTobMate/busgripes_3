class MapsController < ApplicationController
skip_before_filter :verify_authenticity_token
  def index
    @input = params[:gripe_map_select]
    if @input == 0
      flash[:notice] = "Please choose a gripe!"
    elsif @input == 1
      @gripes = Gripe.all
    else
      @gripes = Gripe.where(gripe1: @input) + Gripe.where(gripe2: @input) + Gripe.where(gripe3: @input) + Gripe.where(gripe4: @input)
    end

    @hash = Gmaps4rails.build_markers(@users) do |user, marker |
    marker.lat gripe.latitude
    marker.lng gripe.longitude
    end
  

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gripes }
    end  
  end
  
end