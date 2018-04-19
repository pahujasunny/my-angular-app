import { User } from '../classes/user';
import { UserInfoService } from './UserInfoService';
import { FormsModule } from '@angular/forms';
//import { Component } from '../../../node_modules/@angular/core';
//@Component({
//  selector: 'login-userinfo',
//  template: `<div style="text-align:right">
//                <h5> {{ user.name }} ( {{ user.role }} ) </h5>
//             </div>`,
//  providers: [UserInfoService] // Private Service is specified at component providers level.
//})

//export class UserInfoComponent {
//  user: User;
//  // dependency Injection Grab UserListService
//  constructor(userInfoServicePointer: UserInfoService) {
//    this.user = userInfoServicePointer.getUserInfo();
//    console.log(`ID: ${this.user.id} - Name: ${this.user.name} - Role: ${this.user.role}`);
//  }
//  // In constructor we get reference of user info service
//  // We should not call user service method with in constructor; otherwise it will cause performance issue
//  // So, get reference in private variable so that we can call method in later on outside constructor
//  // this.userdatalist = userListServicePointer.getUserList();
// }


import { Component, OnInit } from '../../../node_modules/@angular/core';
// Import OnInit and implement in class after constructor
// Add code to CALL METHOD using PRIVATE SERVICE POINTER referenceed in contructor
@Component({
  selector: 'login-userinfo',
  template: `Welcome <h5> {{ user.name }} ( {{ user.role }} ) !!</h5>`,
  providers: [UserInfoService] // Private Service is specified at component providers level.
})

export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private userInfoServicePointer: UserInfoService) { }

  ngOnInit(): void {
    this.user = this.userInfoServicePointer.getUserInfo();
  }

  // In constructor we get reference of user info service
  // We should not call user service method with in constructor; otherwise it will cause performance issue
  // So, get reference in private variable so that we can call method in later on outside constructor
  // this.userdatalist = userListServicePointer.getUserList();
}
