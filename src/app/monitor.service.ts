import { Injectable } from '@angular/core';
import { Mapservice } from './mapservice';
import { MAPSERVICES } from './mock-mapservices';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MonitorService {

  getMapservices() : Observable<Mapservice[]> {
    return of(MAPSERVICES);
  }
  
  getMapservice(id: number): Observable<Mapservice> {
    // Todo: send the message _after_ fetching the Mapservice
    return of(MAPSERVICES.find(mapservice => mapservice.id === id));
  }
  
  constructor() { }

}
