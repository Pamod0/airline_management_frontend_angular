import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserListComponent } from './add-edit-user-list.component';

describe('AddEditUserListComponent', () => {
  let component: AddEditUserListComponent;
  let fixture: ComponentFixture<AddEditUserListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditUserListComponent]
    });
    fixture = TestBed.createComponent(AddEditUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
