import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTenantComponent } from './sign-up-tenant.component';

describe('SignUpTenantComponent', () => {
  let component: SignUpTenantComponent;
  let fixture: ComponentFixture<SignUpTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpTenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
