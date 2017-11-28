import { Component, OnInit } from '@angular/core';
import { Mapservice } from '../mapservice';
import { MonitorService } from '../monitor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  mapservices: Mapservice[] = [];

  constructor(private monitorService: MonitorService) { }

  ngOnInit() {
    this.getMapservices();
  }

  getMapservices(): void {
    this.monitorService.getMapservices()
      .subscribe(mapservices => this.mapservices = mapservices.slice(1, 5));
  }
}