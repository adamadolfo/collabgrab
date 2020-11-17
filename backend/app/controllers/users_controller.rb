class UsersController < ApplicationController
    def index 
        @users = User.all
        if @users
            render :json => @users
    end

end
