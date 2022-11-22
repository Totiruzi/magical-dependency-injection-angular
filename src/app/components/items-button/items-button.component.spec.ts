import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsButtonComponent } from './items-button.component';

describe('ItemsButtonComponent', () => {
  let component: ItemsButtonComponent;
  let fixture: ComponentFixture<ItemsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
