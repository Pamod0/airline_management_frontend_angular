import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageTestComponent } from './login-page-test.component';

describe('LoginPageTestComponent', () => {
  let component: LoginPageTestComponent;
  let fixture: ComponentFixture<LoginPageTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageTestComponent]
    });
    fixture = TestBed.createComponent(LoginPageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
