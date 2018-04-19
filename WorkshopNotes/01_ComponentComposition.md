hero.component.ts
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    // object
    hero: Hero = {
        id: 1,
        name: 'Rubber Man'
    };
}
hero.component.html
<div>
  <h2>Id {{hero.id}}</h2>
  <h2>Name {{hero.name}}</h2>
</div>

app.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // data
  // tslint:disable-next-line:no-inferrable-types
  title: string = 'Tour of Heroes';

}
app.component.html
<div>
  <h1>{{title}}</h1>
  <hr/>
 <app-hero></app-hero>
</div>

app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [
    AppComponent, HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }