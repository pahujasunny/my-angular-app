import { HighlightDirective } from '../demo-components/03_Directive_Attribute';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { UserInfoComponent } from '../userInfo/userInfo.component';
import { UserListComponent } from '../userlist/userlist.component';
import { UserDetailsComponent } from '../userInfo/app.userdetails.component';
import { CustomFormsComponent } from '../forms/forms.comonent';

import { ExpenseManagerComponent } from '../expense-manager/expensemanager.comonent';
import { ExpenseDetailsComponent } from '../expense-manager/expense-details/expensedetails.component';

import { MedicalStoreComponent } from '../medical-store/medical-store.component';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PractiseComponent } from '../02_Template_Inline_External/practise.component';
// import { Component } from '@angular/core/src/metadata/directives';


// Component Imported to be used
// Demo Components
import { PipeDemoComponent } from '../demo-components/01_PipeDemo';
// import { ExponentialStrengthPipe } from '../demo-components/01_PipeDemo';


const routes: Routes = [
    {path: 'practise', component: PractiseComponent},
    {path: 'forms', component: CustomFormsComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'expensemanager', component: ExpenseManagerComponent},
    {path: 'medicalstore', component: MedicalStoreComponent},
    {path: 'users', component: UserListComponent},
    {path: 'userinfo', component: UserInfoComponent},
    {path: 'userdetails', component: UserDetailsComponent}
];

@NgModule({
    declarations: [
      PractiseComponent, RegistrationComponent,
      UserListComponent, UserDetailsComponent, UserInfoComponent, RegistrationComponent,
      CustomFormsComponent,
      ExpenseManagerComponent, ExpenseDetailsComponent, MedicalStoreComponent,
      HighlightDirective, PipeDemoComponent
    ],
    imports: [
      BrowserModule, FormsModule, HttpClientModule,
      CommonModule, RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }
