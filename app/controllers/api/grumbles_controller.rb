class Api::GrumblesController < ApplicationController
  before_action :set_grumble, only: [:show, :update, :destroy]

  def index
    @grumbles = Grumble.all.order(:id)
    @page = params[:page].presence || 0
    @page = @page.to_i
    @per_page = 10
    @start_index = @page * @per_page
    @end_index = ( @page + 1 ) * (@per_page - 1)
    @grumble_page = @grumbles[@start_index..@end_index]

    render json: @grumble_page.to_json, status: 200
  end

  def show
    render json: @grumble.to_json, status: 200
  end

  def create
    @grumble = Grumble.new(grumble_params)
    render json: @grumble.to_json, status: 200 if @grumble.save
  end

  def update
    render json: @grumble.to_json, status: 200 if @grumble.update(grumble_params)
  end

  def destroy
    render json: @grumble.to_json if @grumble.destroy
  end

  private

  def set_grumble
    @grumble = Grumble.find(params[:id])
  end

  def grumble_params
    params.require(:grumble).permit(:author,:content,:title,:avatar)
  end

end