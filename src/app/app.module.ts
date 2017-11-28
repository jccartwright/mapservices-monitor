import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { MatToolbarModule, MatGridListModule, MatSidenavModule, MatSidenav } from '@angular/material';
import { MapservicesComponent } from './mapservices/mapservices.component';
import { MapserviceDetailComponent } from './mapservice-detail/mapservice-detail.component';
import { MonitorService } from './monitor.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    ListingComponent,
    DetailComponent,
    MapservicesComponent,
    MapserviceDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [MonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
