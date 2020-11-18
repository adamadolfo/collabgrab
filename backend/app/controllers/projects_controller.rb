class ProjectsController < ApplicationController
    def index
        @projects = Project.all
        if @projects
            render :json => @projects.to_json(:include => [:skills, :users]) 
        else
            render json: {
            status: 500,
            errors: ['no projects found']
            }
        end
    end

    def show
        @project = Project.find(params[:id])
        if @project
            render :json => @project.to_json(:include => [:skills, :users])
        else
            render json: {
            status: 500,
            errors: ['project not found']
            }
        
        end
    end
end
