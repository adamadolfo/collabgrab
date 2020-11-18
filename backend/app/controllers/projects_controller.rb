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

    def create
        @project = Project.new(name: params[:name], details: params[:details], location: params[:location])
        if @project.save
            render json: {
                project: @project,
                working: true
            }
        else 
            render json: {
                working: false,
                errors: ["unsuccessful project creation"]
            }
        end
    end
end
