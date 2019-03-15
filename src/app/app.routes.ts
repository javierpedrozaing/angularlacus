import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { NgModule } from '@angular/core';

import {HomeComponent} from "./home/home.component";
import { AdminComponent } from './admin/admin.component';

//import {HomeResolver} from "./services/main.service";

  const routes: Routes = [
  
    {path: '' , component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'admin', component: AdminComponent}
    
   
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutes {
  } 
  