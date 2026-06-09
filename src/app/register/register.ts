import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api-service';
import { Footer } from '../footer/footer';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  api = inject(ApiService)
  registerForm:FormGroup
  formBuilder = inject(FormBuilder)

  constructor(){
    this.registerForm = this.formBuilder.group({
      username:[],
      email:[],
      password:[]
    })
  }
  
}
