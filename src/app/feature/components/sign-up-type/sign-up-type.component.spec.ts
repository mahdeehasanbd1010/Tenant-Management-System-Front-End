import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTypeComponent } from './sign-up-type.component';

describe('SignUpTypeComponent', () => {
  let component: SignUpTypeComponent;
  let fixture: ComponentFixture<SignUpTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
