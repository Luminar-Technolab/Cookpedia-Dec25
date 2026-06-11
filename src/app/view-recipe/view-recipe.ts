import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AdminModuleRoutingModule } from "../admin-module/admin-module-routing-module";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-view-recipe',
  imports: [Header, Footer, AdminModuleRoutingModule,AsyncPipe],
  templateUrl: './view-recipe.html',
  styleUrl: './view-recipe.css',
})
export class ViewRecipe {

  api = inject(ApiService)
  route = inject(ActivatedRoute)
  recipeId = this.route.snapshot.params['id']
  recipe$ = this.api.viewRecipeAPI(this.recipeId)
  allRealtedRecipes:any = signal([])
  router = inject(Router)

  ngOnInit(){
    this.recipe$.subscribe((res:any)=>{
          //call api to related recipe
      this.getAllRelatedRecipes(res.name,res.cuisine)
    })
  }

  getAllRelatedRecipes(name:string,cuisine:string){   
    this.api.getRelatedRecipesAPI(cuisine).subscribe((res:any)=>{
      if(res.length>1){
        this.allRealtedRecipes.set(res.filter((item:any)=>item.name!=name))
      }else{
        this.allRealtedRecipes.set([])
      }
      // console.log(this.allRealtedRecipes());
    })
  }

  viewRelatedRecipePage(id:string){
    this.recipe$ = this.api.viewRecipeAPI(id)
    this.router.navigateByUrl(`/recipes/${id}`)
  }

  

}
