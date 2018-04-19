import { Component } from '../../../node_modules/@angular/core';
import { UserModel } from '../classes/UserModel';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  // default values to be used by form for pre-population
  // roles: Array<string> = ['Visitor', 'Read Only', 'User', 'People Manager', 'Administrator'];
  // roles = ["Visitor", "ReadOnly", "User", "PeopleManager", "Administrator"];
  roles = ['Visitor', 'Read Only', 'User', 'People Manager', 'Administrator'];

  model = new UserModel(999, 'default values populated', this.roles[0]);


  submitted = false;
  onSubmit(): void {
    console.log('on submit called');
    this.submitted = true;
    console.log(this.model);
  }

}
