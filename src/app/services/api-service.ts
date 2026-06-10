import { HttpClient } from '@angular/common/http';
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
  
}
