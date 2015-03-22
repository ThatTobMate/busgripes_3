class MapsController < ApplicationController
skip_before_filter :verify_authenticity_token
  def index
    @input = params[:gripe_map_select]
    # Input numbers were coming out as string so had to compare below to a sting of 0 or 1.
    # Also the params were always passing back a number so "Gripe.where(gripe1: @input)" would be looking for a gripe where gripe1 = "3"
    # But you don't have gripes stored as a number, you are storing it as the text so in the select form i removed the numbers so you are now passing back the name of the gripe.
    # i.e. "Gripe.where(gripe1: 'Motorbike Accident')".
    if @input == "0"
      flash[:notice] = "Please choose a gripe!"
    elsif @input == "1"
      @gripes = Gripe.all
    else
      @gripes = Gripe.where(gripe1: @input) + Gripe.where(gripe2: @input) + Gripe.where(gripe3: @input) + Gripe.where(gripe4: @input)
    end

    #Had to change the block below, you had user in there rather than gripe.
    # line 19 looked like "@hash = Gmaps4rails.build_markers(@users) do |user, marker |"
    @hash = Gmaps4rails.build_markers(@gripes) do |gripe, marker |
    marker.lat gripe.latitude
    marker.lng gripe.longitude
    end
  

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gripes }
    end  
  end
  
end