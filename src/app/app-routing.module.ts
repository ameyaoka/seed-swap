import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { SeedListComponent } from './seed-list/seed-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [


	{path : 'browse-seed' , component : SeedListComponent },
	

	{path : 'sign-up' , component : CreateAccountComponent  },

	{ path: '',   redirectTo: '/sign-up', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [


RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )


  ],
  exports: [
  		RouterModule

  ]
})
export class AppRoutingModule { }
