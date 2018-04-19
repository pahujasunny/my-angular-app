import { Component } from '../../../node_modules/@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.Component.css']
})
export class HeaderComponent {
  GreetUser = 'Welcome to HEADER Module ';
}
