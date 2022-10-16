import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';
import { New } from '../../models/interfaces/new/new';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url: string = 'https://reqres.in/api/users';
  
  /* Tested on localhost (json-server) */
  // newUserUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http
      .get<User[]>(this.url);
  }

  addUser(newUser: New) {
    this.http
      .post(this.url, newUser)
      // .post(this.newUserUrl, newUser)
      .subscribe(
        (response) => console.log(response),
        (err) => console.log(err),
        () => console.log('data post completed')
      )
  }

}