import { Component, inject } from '@angular/core';
import { AdminModuleRoutingModule } from "../admin-module/admin-module-routing-module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [AdminModuleRoutingModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggedIn:boolean = false
  loginUsername:string = ""
  router = inject(Router)

  ngOnInit(){
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      this.isLoggedIn = true
      const user = JSON.parse(sessionStorage.getItem("user") || '')
      this.loginUsername = user.username
    }
  }

  logout(){
    sessionStorage.clear()
    this.isLoggedIn = false
    this.loginUsername = ""
    this.router.navigateByUrl('/')
  }
}
