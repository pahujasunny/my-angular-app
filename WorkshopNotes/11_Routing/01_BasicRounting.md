app.routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero.component';
import { DashBoardComponent } from './app.dashboard.component';
import { CommonModule } from '@angular/common';
import { HeroDetailsComponent } from './app.herodetails.component';
import { FormsModule } from '@angular/forms';

// Configuration  - Url with View Mapping
/**
 * http://localhost:4200/heroes -
 */
const routes: Routes = [
    { path: 'heroes', component: HeroComponent },
    { path: 'dashboard', component: DashBoardComponent }
];

@NgModule({
    declarations: [HeroComponent, DashBoardComponent,HeroDetailsComponent],
    imports: [CommonModule,FormsModule, RouterModule.forRoot(routes)], //inject Router
    exports: [RouterModule] // module visibilty:changes in 5.x
})
export class AppRoutingModule {
}

app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroService } from './app.heroService';
import { HeaderComponent } from './app.header.component';
import { FormsModule } from '@angular/forms';
import { HeroRegistrationComponent } from './heroregistration.component';
import { PipeDemoComponent } from './app.pipedemo.component';
import { ExponentialStrengthPipe } from './app.pipe';
import { HighlightDirective } from './hightlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    HeroRegistrationComponent,
    PipeDemoComponent,
    ExponentialStrengthPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [HeroService], // Global /shared Service
  bootstrap: [AppComponent]
})
export class AppModule { }

app.component.html
<div class="container">
  <app-header [title]="'Tour of Heroes'" ></app-header>
  <hr/>
  <a routerLink="/heroes" class="nav-link">Heroes</a>
  <a routerLink="/dashboard" class="nav-link">Dashboard</a>
  
  <router-outlet></router-outlet>

 </div>
<!-- <app-heroregisteration></app-heroregisteration> -->
<!-- <app-pipedemo></app-pipedemo>
 -->
<!--  <div class="container">
 <p myHighlight>Highlight me!</p>
</div> -->

app.heroService.ts
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-mock-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HeroService {

    constructor(private http: HttpClient) { }


    // Synchronous
    private getHeroes(): Array<Hero> {
        return HEROES;
    }
    // Asynchronous
    getHeroesAsync(): Promise<Hero[]> {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);

        });
    }
    getHeroesFromServer():  Observable<Hero[]> {
        const url = 'http://localhost:8081/api/heroes';
        return this.http.get<Hero[]>(url);
    }
}