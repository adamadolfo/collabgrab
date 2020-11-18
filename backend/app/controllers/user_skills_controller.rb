class UserSkillsController < ApplicationController
    def index
        @user_skills = UserSkill.all
        if @user_skills
            render :json => @user_skills
        else
            render json: {
            status: 500,
            errors: ['no user_skills found']
            }
        end
    end

    def show
        @user_skill = UserSkill.find(params[:id])
        if @user
            render :json => @user_skill
        else
            render json: {
            status: 500,
            errors: ['user_skill not found']
            }
        
        end
    end
end
