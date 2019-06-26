class Api::V1::EventsController < ApplicationController
  before_action :set_event, only: [:show, :update, :destroy]
  def index 
    @events = Event.all 

    render json: @events, status: 200
  end

  def show
    render json: @event, status: 200
  end

  
  def create
    # binding.pry
    @event = Event.create(event_params)

    render json: @event, status: 200
  end

  def update
    @event.update(event_params)

    render json: @event, status: 200
  end

  def destroy
    @event.destroy

    render json: {eventId: @event.id}
  end


  private 

    def event_params
      params.require(:event).permit(:name, :location, :description, :start_date, :end_date)
    end   

end
