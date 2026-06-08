import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  api = inject(ApiService)
  name:string = ""
  email:string = ""
  message:string = ""

  submitFeedbackForm(){
    if(this.name && this.email && this.message){
      this.api.addFeedbackAPI({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
        alert("Thanl you for your feedback!!! We appreciate your efforts to improve us...")
        this.name=""
        this.email=""
        this.message=""
      })

    }else{
      alert("Please fill the form completely!!!")
    }
  }
}
