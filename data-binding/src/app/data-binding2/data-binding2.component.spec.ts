import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding2Component } from './data-binding2.component';

describe('DataBinding2Component', () => {
  let component: DataBinding2Component;
  let fixture: ComponentFixture<DataBinding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBinding2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
