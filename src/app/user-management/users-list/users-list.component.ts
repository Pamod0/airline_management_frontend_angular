import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    'address'
  ];
  public dataSource:any = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.http.get('http://localhost:3000/api/user')
    .subscribe((data) => {
      console.table(data);
      this.getJsonValue = data;
      this.dataSource = data;
     });
  }
}
