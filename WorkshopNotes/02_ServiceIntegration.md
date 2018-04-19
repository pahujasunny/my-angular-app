//import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HERO } from "./hero-mock-data";
import { Injectable } from "@angular/core";

/* //Object
const hero:Hero ={
id:1,
name:'Rubber Man' 
}; */

@Injectable()
export class HeroService{
/* //Object
hero:Hero ={
id:1,
name:'Rubber Man' 
}; */

getHero():Hero{
return HERO;
}
} 
import { Hero } from "./hero";

//Object
export const HERO:Hero ={
id:101952,
name:'Sourabh' 
}; 
<div>
<h2> Id - {{hero.id}} </h2>
<h2> Name - {{hero.name}} </h2>
</div> 
import {Component} from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './app.heroService';

@Component({
selector:'app-hero',
templateUrl:'hero.component.html'
})
export class HeroComponent{
hero:Hero;
// dependency Injection Grab HeroService
constructor(heroService:HeroService){
this.hero = heroService.getHero();
}
}