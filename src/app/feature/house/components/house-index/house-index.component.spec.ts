import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseIndexComponent } from './house-index.component';

describe('HouseIndexComponent', () => {
  let component: HouseIndexComponent;
  let fixture: ComponentFixture<HouseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
