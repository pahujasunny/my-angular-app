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
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './app.heroService';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
    styles: [`.selected {
        background-color: #CFD8DC;
        color: red;
      }`]
    // providers:[HeroService] // localService
})
export class HeroComponent implements OnInit {

    heroes: Array<Hero>;
    selectedHero: Hero;
    // Grab HeroService
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        // Synchronous Call
        // this.hero = this.heroService.getHero();
        // Asynchronous :Using Promise
        /* this.heroService.getHeroesAsync()
            .then(heroes => this.heroes = heroes); */
        // Asynchronous : Using Observerable
        this.heroService.getHeroesFromServer()
            .subscribe((heroes) => this.heroes = heroes);
    }
    // Listener Api
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}