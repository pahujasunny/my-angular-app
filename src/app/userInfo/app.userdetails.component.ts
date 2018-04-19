import { User } from '../classes/user';
import { UserInfoService } from './UserInfoService';
import { Component, OnInit, Input } from '../../../node_modules/@angular/core';

@Component({
    selector: 'app-userdetails',
    // templateUrl: './app.userdetails.component.html',
    templateUrl: './userdetails.component.html',
    providers: [UserInfoService]
  })

  export class UserDetailsComponent implements OnInit {
  @Input()
  user: User;

  constructor(private userInfoServicePointer: UserInfoService) { }

  ngOnInit(): void {
      this.user = this.userInfoServicePointer.getUserInfo();
    }
  }
