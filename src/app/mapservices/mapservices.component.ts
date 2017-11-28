import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Mapservice } from '../mapservice';
import { MonitorService } from '../monitor.service';
@Component({
  selector: 'monitor-mapservices',
  templateUrl: './mapservices.component.html',
  styleUrls: ['./mapservices.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapservicesComponent implements OnInit {
  mapservices: Mapservice[];

  constructor(private monitorService: MonitorService) { }

  ngOnInit() {
    this.getMapservices();
  }

  getMapservices(): void {
    this.monitorService.getMapservices()
      .subscribe(mapservices => this.mapservices = mapservices);
  }
}
