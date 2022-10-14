import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http
      .get<User[]>(this.url);
  }

  addUser(user: User) {
    this.http
      .post(this.url, user)
      .subscribe(
        (response) => console.log(response),
        (err) => console.log(err),
        () => console.log('data post completed')
      )
  }

}