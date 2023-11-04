import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-edit-user-list',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.scss']
})
export class AddEditUsersComponent {
  userForm: FormGroup;

  education: string[] = [
    'B.Tech', 'M.Tech', 'B.Sc', 'M.Sc', 'B.Com', 'M.Com'
  ];

  constructor(private fb: FormBuilder, 
    private userService: UserService, 
    private dialogRef: DialogRef<AddEditUsersComponent>
    ) {
    this.userForm = this.fb.group({
      firstName: " " ,
      lastName: " ",
      email: " ",
      dob: " ",
      gender: " ",
      education: " ",
      company: " ",
      experience: " ",
      package: " "
    });
  }

  onSubmit(){
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe({
        next: (val: any) => {
          alert('User added successfully');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
    console.log(this.userForm.value);
  }


}
