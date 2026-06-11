import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  server_url = "http://localhost:3000"
  http = inject(HttpClient)

  //getAllRecipes - home & recipes component
  getAllRecipesAPI(){
   return this.http.get<any[]>(`${this.server_url}/recipes`)
  }

  //http://localhost:3000/feedbacks : post request by contact component when send btn clicked
  addFeedbackAPI(reqBody:any){
       return this.http.post(`${this.server_url}/feedbacks`,reqBody)
  }

  //http://localhost:3000/feedbacks/approve : get request by home compoenent when page loads
   getAllApprovedFeedbackAPI(){
   return this.http.get<any[]>(`${this.server_url}/feedbacks/approve`)
  }

  //http://localhost:3000/register : post request by register component when register btn clicked
  registerAPI(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }
  //http://localhost:3000/login : post request by login component when login btn clicked
  loginAPI(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }
  //to append token to request header
  appendToken(){
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem("token")
    if(token){
      headers = headers.append('Authorization',`Bearer ${token}`)
    }
    return {headers}
  }

  //http://localhost:3000/recipes/6a2246d0830c476f7bea0464 : get request by view recipe component when page open --- authorised request
  viewRecipeAPI(recipeId:string){
       return this.http.get<any>(`${this.server_url}/recipes/${recipeId}`,this.appendToken())
  }

  //http://localhost:3000/recipes-related?cuisine=Pakistani : get request by view compoenent when page loads
  getRelatedRecipesAPI(cuisine:string){
      return this.http.get<any[]>(`${this.server_url}/recipes-related?cuisine=${cuisine}`,this.appendToken())
  }

}
