import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Data } from '../../models/interfaces/data/data';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})

export class ViewUsersComponent implements OnInit, AfterViewInit {

  users: User[] = [];

  userData: Data[] = [];
  
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];
  dataSource = new MatTableDataSource<Data>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getAllUsers() {
    this.us
      .getUsers()
      .subscribe(
        (response) => {
          this.users = response;
          this.dataSource.data = JSON.parse(JSON.stringify(Object.values(response)[4]));
          // this.dataSource = new MatTableDataSource(this.users)
        },
        (err) => console.log(err),
        () => console.log("completed")
      )
  }

}