import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOutputComponent } from './event-output.component';

describe('EventOutputComponent', () => {
  let component: EventOutputComponent;
  let fixture: ComponentFixture<EventOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
