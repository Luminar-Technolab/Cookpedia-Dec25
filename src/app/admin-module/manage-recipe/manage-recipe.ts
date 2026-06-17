import { Component, inject,signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '../models/recipeModel';

@Component({
  selector: 'app-manage-recipe',
  standalone: false,
  templateUrl: './manage-recipe.html',
  styleUrl: './manage-recipe.css',
})
export class ManageRecipe {

  api = inject(ApiService)
  route = inject(ActivatedRoute)
  recipeId = this.route.snapshot.params['id']
  recipeDetails = signal<RecipeModel>({})
  ingredientArray:any = []
  instructionArray:any = []
  mealTypeArray:any = []

  addIngredient(ingredientInput:HTMLTextAreaElement){
    if(ingredientInput.value){
      this.ingredientArray.push(ingredientInput.value)
      ingredientInput.value = ""
    }
  }
  removeIngredient(value:string){
    this.ingredientArray = this.ingredientArray.filter((item:string)=>item!=value)
  }

  addInstrcution(instrcutionInput:HTMLTextAreaElement){
    if(instrcutionInput.value){
      this.instructionArray.push(instrcutionInput.value)
      instrcutionInput.value = ""
    }
  }
  removeInstrcution(value:string){
    this.instructionArray = this.instructionArray.filter((item:string)=>item!=value)
  }

  addMeal(mealInput:HTMLTextAreaElement){
    if(mealInput.value){
      this.mealTypeArray.push(mealInput.value)
      mealInput.value = ""
    }
  }
  removeMeal(value:string){
    this.mealTypeArray = this.mealTypeArray.filter((item:string)=>item!=value)
  }

  addRecipe(){
    this.recipeDetails().ingredients = this.ingredientArray
    this.recipeDetails().instructions = this.instructionArray
    this.recipeDetails().mealType = this.mealTypeArray
    const {name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,caloriesPerServing,image,mealType} = this.recipeDetails()
    if(name && ingredients!.length>0  && instructions!.length>0 && prepTimeMinutes && cookTimeMinutes && servings && difficulty && cuisine && caloriesPerServing && image && mealType!.length>0){
      this.api.addRecipeAPI(this.recipeDetails()).subscribe({
        next:(res:any)=>{
          alert("Recipe Added successfully")
          this.recipeDetails.set({})
          this.instructionArray =[]
          this.ingredientArray =[]
          this.mealTypeArray =[]
        },
        error:(reason:any)=>{
          alert(reason.error)
        }
      })
    }else{
      alert("Fill the form completely!!!")
    }
  }

}
