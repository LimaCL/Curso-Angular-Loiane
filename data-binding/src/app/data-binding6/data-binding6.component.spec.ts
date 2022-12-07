import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinding6Component } from './data-binding6.component';

describe('DataBinding6Component', () => {
  let component: DataBinding6Component;
  let fixture: ComponentFixture<DataBinding6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBinding6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinding6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
