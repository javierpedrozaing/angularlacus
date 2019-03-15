import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutes} from "./app.routes";
import {MainService} from "./services/main.service";
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    LoginComponent, AdminComponent
  ],
  imports: [
    AppRoutes,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
