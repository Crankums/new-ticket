class Api::V1::CustomersController < ApplicationController
    def index
        @customers = Customer.all

        render json: @customers, status: 200
    end

    def find_or_create_customer
        if !@customer = Customer.find_by_name(params[:name])
            @customer = Customer.create(params)
        end
        render json: @customer, status: 200
    end

    def show
        @customer = Customer.find(params[:id])

        render json: @customer, status: 200
    end

    def create
        @customer = Customer.create(customer_params)

        render json: @customer, status: 200
    end

    def update
        @customer = Customer.find(params[:id])
        @customer.update(customer_params)

        render json: @customer, status: 200
    end

    def destroy
        @customer = Customer.find(params[:id])
        @customer.delete
        
        render json: {customerId: @customer.id}
    end

    private

    def customer_params
        params.require(:customer).permit(:name, :email)
    end
end