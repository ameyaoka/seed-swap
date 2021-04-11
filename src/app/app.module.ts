import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedListComponent } from './seed-list/seed-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {RouterModule,Routes} from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    	FormsModule,
	],
 


  declarations : [
  	AppComponent,
	SeedListComponent,
	CreateAccountComponent ,
	PageNotFoundComponent ,
],


  bootstrap: [AppComponent]
})
export class AppModule { }
