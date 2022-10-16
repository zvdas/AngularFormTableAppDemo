import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  userForm: any;
  msg: string = '';

  constructor(private fb: FormBuilder, private us: UserService) {
    this.userForm = fb.group({
      'name': [''],
      'job': ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.us.addUser(this.userForm.value);
    this.msg = 'User Created Succesfully';
  }
}
