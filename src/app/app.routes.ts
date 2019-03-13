import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {HomeComponent} from "./home/home.component";

//import {HomeResolver} from "./services/main.service";


const children = [
    {path: '', component: HomeComponent},
    
  ];

  const routes: Routes = [
  
    {
      path: '',
      children: [...children]
    }
   
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutes {
  }
  