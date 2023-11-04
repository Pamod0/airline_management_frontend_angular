import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditUsersComponent } from '../add-edit-users/add-edit-users.component';
import { UserService } from 'src/app/services/user.service';
// import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{
  public getJsonValue: any;
  public displayedColumns: string[] =
  [
    'userId',
    'fistname', 
    'lastname', 
    'phone', 
    'address',
    'action',
  ];
  public dataSource:any = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  openAddEditForm() {
    this.dialog.open(
      AddEditUsersComponent, 
      { width: '500px', height: '450px' })
  }
  

  getUsers() {
    this.userService.getUsers()
    .subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
      this.dataSource = data;
      console.log(this.dataSource);
     });
  }
}
