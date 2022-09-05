import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Activity } from '../models/Activity';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  users: Activity[] | undefined;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data:any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({value, valid}: {value: Activity, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);

      this.form.reset();
    }
  }

}
