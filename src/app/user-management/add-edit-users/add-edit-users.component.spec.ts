import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsersComponent } from './add-edit-users.component';

describe('AddEditUserListComponent', () => {
  let component: AddEditUsersComponent;
  let fixture: ComponentFixture<AddEditUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUsersComponent]
    });
    fixture = TestBed.createComponent(AddEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});