import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMonthBillComponent } from './pay-month-bill.component';

describe('PayMonthBillComponent', () => {
  let component: PayMonthBillComponent;
  let fixture: ComponentFixture<PayMonthBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayMonthBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayMonthBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
