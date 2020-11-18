class CollaborationsController < ApplicationController
    def index
        @collaborations = Collaboration.all
        if @collaborations
            render :json => @collaborations
        else
            render json: {
            status: 500,
            errors: ['no collaborations found']
            }
        end
    end

    def show
        @collaboration = Collaboration.find(params[:id])
        if @user
            render :json => @collaboration
        else
            render json: {
            status: 500,
            errors: ['collaboration not found']
            }
        
        end
    end
end
