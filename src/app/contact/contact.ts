import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { FormsModule, NgForm } from '@angular/forms';
// import Swal from 'sweetalert2';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,Header,Footer ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  api = inject(ApiService)
  name:string = ""
  email:string = ""
  message:string = ""

  submitFeedbackForm(form:NgForm){
    if(this.name && this.email && this.message){
      this.api.addFeedbackAPI({name:this.name,email:this.email,message:this.message}).subscribe((res:any)=>{
        // Swal.fire({
        //   title: "Feedback Added!",
        //   text: "Thank you for your feedback!!! We appreciate your efforts to improve us...!",
        //   icon: "success"
        // });
        alert("Thank you for your feedback!!! We appreciate your efforts to improve us...!")
       form.resetForm()
      })
    }else{
      // Swal.fire({
      //     title: "Incomplete Form!",
      //     text: "Please fill the form completely!!!",
      //     icon: "info"
      //   });
        alert("Please fill the form completely!!!")
    }
  }
}
