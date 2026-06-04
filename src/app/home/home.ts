import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AdminModuleRoutingModule } from "../admin-module/admin-module-routing-module";
@Component({
  selector: 'app-home',
  imports: [Header, Footer, AdminModuleRoutingModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
