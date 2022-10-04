import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding7Component } from './data-binding7.component';

describe('DataBinding7Component', () => {
  let component: DataBinding7Component;
  let fixture: ComponentFixture<DataBinding7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBinding7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
