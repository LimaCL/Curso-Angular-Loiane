import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding5Component } from './data-binding5.component';

describe('DataBinding5Component', () => {
  let component: DataBinding5Component;
  let fixture: ComponentFixture<DataBinding5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBinding5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
