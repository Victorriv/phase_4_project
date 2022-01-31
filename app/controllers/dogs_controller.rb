class DogsController < ApplicationController
    #see all dogs (index)
    #create a dog (create)
    #update a dog (update)
    # delete a dog (destroy)
    #maybe see one specific dog

    #skip_before_action :authorize

    def index
        dogs = Dog.all
        render json: dogs
    end

    def create
        dog = Dog.create(dog_params)
        render json: dog

    end

    def update 
        dog = Dog.find(params[:id])
        dog.update(dog_params)
        render json: dog

    end 

    def destroy
        dog = Dog.find(params[:id])
        dog.destroy

    end 
    
    def show 
        dog = Dog.find(params[:id])
        render json: dog

    end

    private 

    def dog_params
        params.require(:dog).permit(:name, :age, :breed, :shelter_id)

    end 

end
