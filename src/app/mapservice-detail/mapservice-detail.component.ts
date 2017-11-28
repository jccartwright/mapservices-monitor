import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Mapservice } from '../mapservice';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MonitorService }  from '../monitor.service';

@Component({
  selector: 'monitor-mapservice-detail',
  templateUrl: './mapservice-detail.component.html',
  styleUrls: ['./mapservice-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapserviceDetailComponent implements OnInit {
  @Input() mapservice: Mapservice;
  
  constructor(
    private route: ActivatedRoute,
    private monitorService: MonitorService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMapservice();
  }

  getMapservice(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.monitorService.getMapservice(id)
      .subscribe(mapservice => this.mapservice = mapservice);
  }

  goBack(): void {
    this.location.back();
  }
}
