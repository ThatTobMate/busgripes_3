class HomepageController < ApplicationController

  def index
    @gripe = Gripe.new
    @gripes = Gripe.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @gripes }

      # render :partial => '/gripes/_form.html.erb'

    end
  end

end

