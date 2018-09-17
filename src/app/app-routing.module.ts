import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonFormComponent } from './person/person-form/person-form.component';

const routes: Routes = [
    { path: 'home',
       component: DashboardComponent
      //canActivate : [AuthGuard]
    },
    { path: 'pessoas',
       component: PersonListComponent
      //canActivate : [AuthGuard]
    },
    { path: 'pessoas/novo',
    component: PersonFormComponent
   //canActivate : [AuthGuard]
 },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    //  {
    //    path: '**',
    //    component: Error404Component
    //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }