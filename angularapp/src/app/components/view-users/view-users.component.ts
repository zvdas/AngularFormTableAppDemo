import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})

export class ViewUsersComponent implements OnInit {

  // users = new Array<User>();
  users = {};

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.us
      .getUsers()
      .subscribe(
        (response) => {this.users = response},
        (err) => console.log(err),
        () => console.log("completed")
      )
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.users;
  data = Object.keys(this.users)

}