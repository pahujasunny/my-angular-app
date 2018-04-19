Example: Master -Details Page: Parent /Child :Passing data from Parent to Child as Prop
...............................

hero.component.html
<div>
  <h1>Hero Master Page</h1>
  <hr/>
  <app-herodetails [hero]="hero" ></app-herodetails>
</div>
hero.component.ts
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './app.heroService';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
    // providers:[HeroService] // localService
})
export class HeroComponent implements OnInit {

    hero: Hero;
    // Grab HeroService
    constructor(private heroService: HeroService) {  }
    ngOnInit(): void {
        // Synchronous Call
        // this.hero = this.heroService.getHero();
        // Asynchronous
        this.heroService.getHeroAsync()
            .then(hero => this.hero = hero);
    }

}
...Child Component:
app.herodetails.component.ts
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-herodetails',
    templateUrl: 'herodetails.component.html'
})
export class HeroDetailsComponent {
    @Input()
    hero: Hero;
}
app.herodetails.component.html
<div>
  <h3>Hero Details</h3>
  <h2>Id {{hero.id}}</h2>
  <h2>Name {{hero.name}}</h2>
</div>
app.module.ts
import { HeroDetailsComponent } from './app.herodetails.component';

 declarations: [
    HeroDetailsComponent
  ]