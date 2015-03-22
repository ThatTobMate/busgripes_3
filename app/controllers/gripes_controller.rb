class GripesController < ApplicationController
  # GET /gripes
  # GET /gripes.json

  before_filter :authenticate_user!

  def index
    @gripes = Gripe.all
    @hash = Gmaps4rails.build_markers(@gripes) do |gripe, marker |
      marker.lat gripe.latitude
      marker.lng gripe.longitude
    end
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gripes }
    end
  end

  # GET /gripes/1
  # GET /gripes/1.json
  def show
    @gripe = Gripe.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @gripe }
    end
  end

  # GET /gripes/new
  # GET /gripes/new.json
  def new
    @gripe = Gripe.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @gripe }
    end
  end

  # GET /gripes/1/edit
  def edit
    @gripe = Gripe.find(params[:id])
  end

  # POST /gripes
  # POST /gripes.json
  def create

    @gripe = Gripe.new(params[:gripe])
    @gripe.user_id = current_user.id
    @gripe.latitude = @gripe.latitude.to_f
    @gripe.longitude = @gripe.longitude.to_f
    if @gripe.occurence.nil?
      @gripe.occurence = Time.now
    end
    @gripe.save
    #Removed the address line as it was overriding the lat long and also called @gripe.save
    respond_to do |format|
      if @gripe.save
        format.html { redirect_to @gripe, notice: 'Gripe successfully created.' }
        format.json { render json: @gripe, status: :created, location: @gripe }
      else
        format.html { render action: "new" }
        format.json { render json: @gripe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /gripes/1
  # PUT /gripes/1.json
  def update
    @gripe = Gripe.find(params[:id])

    respond_to do |format|
      if @gripe.update_attributes(params[:gripe])
        format.html { redirect_to @gripe, notice: 'Gripe was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @gripe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gripes/1
  # DELETE /gripes/1.json
  def destroy
    @gripe = Gripe.find(params[:id])
    @gripe.destroy

    respond_to do |format|
      format.html { redirect_to gripes_url }
      format.json { head :no_content }
    end
  end
end
