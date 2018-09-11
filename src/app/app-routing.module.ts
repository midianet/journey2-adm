import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    { path: 'home',
       component: DashboardComponent
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