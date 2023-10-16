import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyClassUpdatesComponent } from './daily-class-updates.component';

describe('DailyClassUpdatesComponent', () => {
  let component: DailyClassUpdatesComponent;
  let fixture: ComponentFixture<DailyClassUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyClassUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyClassUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
