import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PractiseComponent } from './02_Template_Inline_External/practise.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './userlist/userlist.component';

import { UserInfoComponent } from './userInfo/userInfo.component';
import { UserDetailsComponent } from './userInfo/app.userdetails.component';

import { NavBarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration/registration.component';


// Demo Components
import { PipeDemoComponent } from './demo-components/01_PipeDemo';
import { ExponentialStrengthPipe } from './demo-components/01_PipeDemo';
import { HighlightDirective } from './demo-components/03_Directive_Attribute';

// HTTP Client Module
import { HttpModule } from '@angular/http'; //angular 4
import { HttpClientModule } from '@angular/common/http'; //angular 5
// import { HttpClient } from '@angular/common/http'; //angular 5

@NgModule({
  declarations: [
    AppComponent, PractiseComponent, HeaderComponent,
    UserListComponent, UserInfoComponent, UserDetailsComponent, NavBarComponent,
    RegistrationComponent,
    PipeDemoComponent, ExponentialStrengthPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
