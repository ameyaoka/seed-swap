import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedListComponent } from './seed-list/seed-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes: Routes = [
	{path : 'browse-seed' , component : SeedListComponent },
	
	{path : 'sign-up' , component : CreateAccountComponent  },
];	

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
    	appRoutes,
	{enableTracing: true} // debugging purpose only
	)
  ],
  

 


  declarations : [
  	AppComponent,
	SeedListComponent,
	CreateAccountComponent ,
],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
