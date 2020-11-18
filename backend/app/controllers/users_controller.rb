class UsersController < ApplicationController
    def index 
        @users = User.all
        if @users
            render :json => @users.to_json(include: [:skills, :projects])
        else
            render json: {
              status: 500,
              errors: ['no users found']
            }
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render :json => @user.to_json(:include => [:skills, :projects])
        else
            render json: {
            working: false,
            errors: ['user not found']
            }
        end
    end

    def create
        @user = User.new(name: params[:name], username: params[:username], password: params[:password], location: params[:location])
        if @user.save
            render json: {
                user: @user,
                working: true
            }
        else 
            render json: {
                working: false,
                errors: ["unsuccessful signup"]
            }
        end
    end

end
