import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AsyncPipe } from '@angular/common';
import { AdminModuleRoutingModule } from "../admin-module/admin-module-routing-module";

@Component({
  selector: 'app-save-recipes',
  imports: [Header, Footer, AdminModuleRoutingModule],
  templateUrl: './save-recipes.html',
  styleUrl: './save-recipes.css',
})
export class SaveRecipes {

  api = inject(ApiService)
  allRecipes:any = signal([])

  ngOnInit(){
    this.getallRecipes()
  }

  getallRecipes(){
    this.api.getAllSaveRecipesAPI().subscribe((res:any)=>{
      this.allRecipes.set(res)
    })
  }

  deleteRecipe(id:string){
    this.api.removeItemFromSaveRecipesAPI(id).subscribe((res:any)=>{
      this.getallRecipes()
    })
  }

}
