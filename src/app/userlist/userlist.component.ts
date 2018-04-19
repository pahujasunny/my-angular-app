import { Component, OnInit, Inject } from '../../../node_modules/@angular/core';
import { User } from '../classes/user';
import { UserListService } from './UserListService';

@Component({
  selector: 'app-userlist',
//   template: `<div style="text-align:center">
//   <h4>
//     User Listing component:
//   </h4>
//     <div className="container">
//       <div className="row">
//           <div className="col-md-12">
//               <h1> {{ this.UserList }}</h1>
//            <div className="card">
//                   <ul  className="list-group">
//                       {{ this.UserListView }}
//                   </ul>
//             </div>
//           </div>
//      </div>
//   </div>
//   <hr />
// </div>`,
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.Component.css'],
  providers: [UserListService] // Private Service is specified at component providers level.
})

// export class UserListComponent {
//   UserList = 'List of Users is displayed below:';
//   userdatalist: Array<User>;
//   UserListView = '';
//   // UserListView = 'UserListView';
//   // dependency Injection Grab UserListService
//   // get reference of user list service in private variable so that we can call method in later on
//   constructor(userListServicePointer: UserListService) {
//     this.userdatalist = userListServicePointer.getUserList();
//     // this.userdatalist.forEach(user => console.log(`${user.id}${user.name}`));
//     this.UserListView = this.getListViewHTML(this.userdatalist);
//    }
//   // we should not call method fro user service list with in constructor
//   // otherwise it will cause performance issue
//   // So, get reference in private variable so that we can call method in later on outside constructor
//   // this.userdatalist = userListServicePointer.getUserList();

// getListViewHTML(datalist) {
//   let recordvalue: string;
//   // recordvalue = 'Here will be my List View';
//   recordvalue = '';
//   // datalist.forEach(user => recordvalue += `${user.id}${user.name}`);
//   datalist.forEach(user => recordvalue += `  ------- ${user.id}. ${user.name} (${user.role})`
//     );
//   return recordvalue;

// }


// //   UserListView = this.userdatalist.forEach(user => console.log(`${user.id}${user.name}`));


//   //   `<li className="list-group-item d-flex justify-content-between align-items-center">
//   //       <span className="badge badge-primary badge-pill">{user.id}</span>
//   //       {user.name}
//   //   </li>`

//   // );

// }

// Working - used for async local service call
// export class UserListComponent  implements OnInit {
//   UserList = 'List of Users is displayed below:';
//   userdatalist: Array<User>;
//   UserListView = '';

//   selectedUser: User;
//   isAdminSelected: boolean;

//   constructor(private userListServicePointer: UserListService) {
//    }
// // Sync Service Call
//    ngOnInit(): void {
//     // Sync Service Call
//     // this.userdatalist = this.userListServicePointer.getUserList();
//     this.userListServicePointer.getUserListAsync()
//       .then(users => this.userdatalist = users);
//   }

//   // // event listerner added here
//   // onRowSelect(): void{
//   //   console.log('row is selected');
//   // }


//   onRowSelect(user): void {
//     console.log(user);
//     this.selectedUser = user;

//     if (user.role === 'Administrator') {
//       this.isAdminSelected = true;
//     }
//     else {
//       this.isAdminSelected = false;
//     }
//   }



// }

// Used for HTTP service call
export class UserListComponent  implements OnInit {
  UserList = 'List of Users is displayed below:';
  userdatalist: Array<User>;
  UserListView = '';

  selectedUser: User;
  isAdminSelected: boolean;

  constructor(private userListServicePointer: UserListService) {
   }
   ngOnInit(): void {
    this.userListServicePointer.getUserListFromserver()
      .subscribe((users) => this.userdatalist = users);
      // Here we have called HTTP
  }

  onRowSelect(user): void {
    console.log(user);
    this.selectedUser = user;

    if (user.role === 'Administrator') {
      this.isAdminSelected = true;
    }
    else {
      this.isAdminSelected = false;
    }
  }



}
