class GrumblesController < ApplicationController

  def home
    @grumbles = Grumble.first(10)
  end

end