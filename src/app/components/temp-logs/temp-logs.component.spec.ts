import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempLogsComponent } from './temp-logs.component';

describe('TempLogsComponent', () => {
  let component: TempLogsComponent;
  let fixture: ComponentFixture<TempLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
