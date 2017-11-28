import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapservicesComponent } from './mapservices/mapservices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapserviceDetailComponent } from './mapservice-detail/mapservice-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MapserviceDetailComponent },
  { path: 'mapservices', component: MapservicesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
