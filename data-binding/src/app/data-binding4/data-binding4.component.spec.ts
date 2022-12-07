import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding4Component } from './data-binding4.component';

describe('DataBinding4Component', () => {
  let component: DataBinding4Component;
  let fixture: ComponentFixture<DataBinding4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBinding4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
