import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapserviceDetailComponent } from './mapservice-detail.component';

describe('MapserviceDetailComponent', () => {
  let component: MapserviceDetailComponent;
  let fixture: ComponentFixture<MapserviceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapserviceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapserviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
