import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './userInfo/userInfo.component';
import { UserDetailsComponent } from './userInfo/app.userdetails.component';
import { FormsModule } from '@angular/forms';

// Demo Components
// import { PipeDemoComponent } from './demo-components/01_PipeDemo';
// import { ExponentialStrengthPipe } from './demo-components/01_PipeDemo';

// HTTP Client Module
// import { HttpModule } from '@angular/http'; //angular 4
import { HttpClientModule } from '@angular/common/http'; // angular 5
// import { HttpClient } from '@angular/common/http'; //angular 5
import { AppRoutingModule } from './routing/app.routing.component';
// import { MedicalStoreComponent } from './medical-store/medical-store.component';

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, HeaderComponent// , MedicalStoreComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
