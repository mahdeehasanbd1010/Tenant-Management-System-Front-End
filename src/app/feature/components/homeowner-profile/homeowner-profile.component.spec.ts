import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerProfileComponent } from './homeowner-profile.component';

describe('HomeownerProfileComponent', () => {
  let component: HomeownerProfileComponent;
  let fixture: ComponentFixture<HomeownerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownerProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeownerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
