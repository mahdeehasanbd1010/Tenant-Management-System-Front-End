import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilityBillComponent } from './add-utility-bill.component';

describe('AddUtilityBillComponent', () => {
  let component: AddUtilityBillComponent;
  let fixture: ComponentFixture<AddUtilityBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilityBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUtilityBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
