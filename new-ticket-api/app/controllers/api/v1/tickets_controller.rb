class Api::V1::TicketsController < ApplicationController
    def index
        tickets = Ticket.all

        render json: tickets, status: 200
    end

    def show
        ticket = Ticket.find(params[:id])

        render json: ticket, status: 200
    end

    def create
        ticket = Ticket.create(ticket_params)

        render json: ticket, status: 200
    end

    def update
        ticket = Ticket.find(params[:id])
        ticket.update(ticket_params)

        render json: ticket, status: 200
    end

    def destroy
        ticket = Ticket.find(params[:id])
        ticket.delete
        
        render json: {ticketId: ticket.id}
    end

    private

    def ticket_params
        params.require(:ticket).permit(:parts, :labor, :price)
    end


end
