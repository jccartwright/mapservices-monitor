import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapservicesComponent } from './mapservices.component';

describe('MapservicesComponent', () => {
  let component: MapservicesComponent;
  let fixture: ComponentFixture<MapservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
