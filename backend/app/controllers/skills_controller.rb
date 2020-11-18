class SkillsController < ApplicationController
    def index
        @skills = Skill.all
        if @skills
            render :json => @skills.to_json(:include => [:projects, :users])
        else
            render json: {
            status: 500,
            errors: ['no skills found']
            }
        end
    end

    def show
        @skill = Skill.find(params[:id])
        if @user
            render :json => @skill.to_json(:include => [:projects, :users])
        else
            render json: {
            status: 500,
            errors: ['skill not found']
            }
        
        end
    end
end
