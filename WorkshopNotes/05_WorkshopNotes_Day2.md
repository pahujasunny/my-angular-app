What is Angular? What is Angular js?
Angular is code name for version 2.x on wards
Angular js is code name for version 1.x

Angular is javascript framework to develop single page web application.
Angular is DOM Manipulation framework.

Angular Big Picture

Angular 
   |
Javascript DOM
   |
Browser DOM


  Angular 
    |
Zone(Angular Execution Engine)
     |
Javascript Engine
 

# Angular is MVC Framework
 M - Model  - What could be model ? How to represent Model?
      >Primitives - number,string,boolean
      >Objects - literal objects,Arrays.
 V- View - Templates
  >Template is passive reprsentation of User Interface(GUI)
  >View is runtime(Active) representation of User Interface.
  >Templates are collection of html elements and javascript    expressions and angular specfic notations.
How do i write a template?
>inline templates
>external templates
   # external templates are just .html files
      >heroes.html
C - Controller
>Contoller is a thing which controls data flow.
>Controller is a glue between model and View
>Controller can have "data" and "methods(api)".
>Controller is just object.

Note: In Angular most of things are Objects.

How to create Controller?
>Controllers are called in Angular 2.x on wards "Components"

>Steps to create Component(Controller)?

>declare a class

class DashBoard {

}
>Qualify the class as Component

>Using Inheritance : Not Supported now - This is only understanding purpose

import {Component} from '@angular/core'

class DashBoard extends Component {

}

>Using Decorator: Supported now 

import {Component} from '@angular/core'

@Component({})
class DashBoard  {
  
}

>Component With Data:

@Component({})
class DashBoard  {
  //Data
  name:string = 'Subramanian'
  heroesList:Array<Hero> = [{id:1,name:'test'}]
}

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Controller creation:
>With inline template

Steps:
>create a class

export class AppComponent {

}
>Decorate the class with @Component Decorator
# Angular  Modules
@angular - root Folder
>core
>common
>http
>animations
>compiler
>forms
>language-service
>platform-browser
>Platform-browser-dynamic
>router
............
Component Decorator takes parameter which literal object called
"Meta Object"  - Component Configuration Object.

Meta Object:

{ 
  changeDetection?: ChangeDetectionStrategy
  viewProviders?: Provider[]
  moduleId?: string
  templateUrl?: string
  template?: string
  styleUrls?: string[]
  styles?: string[]
  animations?: any[]
  encapsulation?: ViewEncapsulation
  interpolation?: [string, string]
  entryComponents?: Array<Type<any> | any[]>
  preserveWhitespaces?: boolean
  // inherited from core/Directive
  selector?: string
  inputs?: string[]
  outputs?: string[]
  host?: {...}
  providers?: Provider[]
  exportAs?: string
  queries?: {...}
}

Important meta configuration:

selector?: string
  >The component's html tag name

<app-root> -  custom Element/user defined tag
How browser understand other than in built html elements.
This is new feature of HTML 5.
According to html
   1. You can add new html element and you teach browser how
to render.
   How do you teach your browser?
        Javascript
  2. You can custom attributes

Custom Element rules:

1.Custom elements must follow "dash-case" notation
    <app-root> <e-learning> <app-customers>


 template?: string:
  >html markups with javascript expression and angular sepfic notations.
  '' or "" or `` can be used
  `` is highly recommended

External Template:
templateUrl:string
  >linking the template file

Code:
>template,Type class,Data(primitive,literal)
import { Component } from '@angular/core';

class Hero {
  id: number;
  name?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // data
  // tslint:disable-next-line:no-inferrable-types
  title: string = 'Tour of Heroes';
  // object
  hero: Hero = {
    id: 1,
    name: 'Rubber Man'
  };
}

Code refactoring: Style Guide
>make  a separate file and link
hero.ts

export  class Hero {
    id: number;
    name?: string;
}

app.component.html
<div>
  <h1>{{title}}</h1>
  <hr/>
  <div>
    <h2>Id {{hero.id}}</h2>
    <h2>Name {{hero.name}}</h2>
  </div>
</div>

app.component.ts
import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // data
  // tslint:disable-next-line:no-inferrable-types
  title: string = 'Tour of Heroes';
  // object
  hero: Hero = {
    id: 1,
    name: 'Rubber Man'
  };
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# Angular Application
# Dependency Injection /IOC 

What is Application?
>Application is collection of objects and static assets.
>Application itself is Object, called Container Object,Contains
 other Objects

# Module:
Module is similar to folder.
Module contains objects and submodule
Module is just object which contains other objects and submodules

# How to create Module Object?

1.declare class
2.you have to decorate the class with @NgModule
3.NgModule decorator meta data.

import {NgModule} from '@angular/core'

@NgModule({})
class AppModule{}

NgModule decorator meta Object:
..............................
{ 
  providers?: Provider[]
  declarations?: Array<Type<any> | any[]>
  imports?: Array<Type<any> | ModuleWithProviders | any[]>
  exports?: Array<Type<any> | any[]>
  entryComponents?: Array<Type<any> | any[]>
  bootstrap?: Array<Type<any> | any[]>
  schemas?: Array<SchemaMetadata | any[]>
  id?: string
}
# Angular Objects classification

# 1.view objects: 
    Related to html display
  Component,pipes,Directives
View objects must be configured in declarations meta data

# 2.Module and submodule objects:
   Building containers objects
   Module class decorated with @NgModule
Module DI must be configured in imports meta 

# 3.Service layer Objects
    Contains application logic and data
    Service class decorated with @Injectable
Service DI must be configured via providers meta data


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

Note: In Angular dont create any objects manually.Assign to 
Angular DI,Which takes care to create and link.

Angular work flow:

index.html--->main----->AppModule-----AppComponent--->Other Components
 
main.ts
 platformBrowserDynamic
    It is function ,used to start window.onload
If DOM ready, go and create AppModule Object,once ready go and start......

index.html is entry to web app:

index.html
  <script src="main.js"> </script>
                 |
                app.module.js
                    |
                app.component.js
                    |
                    Render

Libs inside html:
...............
<script type="text/javascript" src="inline.bundle.js"></script>
   -inline scripts
<script type="text/javascript" src="polyfills.bundle.js">
   Wrapper features of old browsers
</script><script type="text/javascript" src="styles.bundle.js">
   Styles
</script>
<script type="text/javascript" src="vendor.bundle.js">
 Angular libs
</script>

<script type="text/javascript" src="main.bundle.js"></script>
 App Module

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Component Composition , Component DI:
....................................

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

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Styling Your Component:
.......................
Styles can be applied in three ways
1.inline styles /component level styles
 Styles can be used only by that component only.
 styles:[`
     .header {
         background-color:yellow
     }
 `]
import { Component } from '@angular/core';
@Component({
    selector: 'app-header',
    template: `<div class="header">
                 <h1>Welcome To Angular Application</h1>
               <div>`,
    styles: [`.header{
        background-color:yellow;           
    }`]
})
export class HeaderComponent {

}

2.External styles
 you have style outside , which you want link
   styleUrls:['styles.css']
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<div class="header">
                 <h1>Welcome To Angular Application</h1>
               <div>`,
     styleUrls: ['header.component.css']
})
export class HeaderComponent {

}
3.Global styles
 1.Global styles you link in index.html 
 2.Global styles like bootstrap can be linked via webpack.
     you configure angular-cli styles:[]
Bootstrap:
>npm install bootstrap --save
>angular-cli.json
  "styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Service Layer:
.............

What is Service?
Service in Angular just object,having data and its logic.

Create a Service Class
......................
app.heroService.ts

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HERO } from './hero-mock-data';

@Injectable()
export class HeroService {

    getHero(): Hero {
        return HERO;
    }
}

app.hero.component.ts
import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './app.heroService';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    hero: Hero;
    // Grab HeroService
    constructor(heroService: HeroService) {
        this.hero = heroService.getHero();
    }
}
app-mock-data.ts
import { Hero } from './hero';

export const HERO: Hero = {
    id: 1,
    name: 'Spider Man'
};

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Data Initiazaition using Component Life Cycle callback:

Style Guide:
> Dont initalize the data inside constructor
    # Use Constructor only for DI
>Initalize the data inside component life cycle api

Angular Provides life cycle callbacks via interfaces.

  
      
interface OnInit { 
  ngOnInit(): void
}

hero.component.ts

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './app.heroService';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {

    hero: Hero;
    // Grab HeroService
    constructor(private heroService: HeroService) {  }
    ngOnInit(): void {
        this.hero = this.heroService.getHero();
    }

}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Types of Services:
..................
# The Service may be used by only one Component in the Application.
   >Local Service
 @Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
    // providers:[HeroService] // localService
})
# The Service may be used by many components in the Application
  >Global Service or Shared Service
@NgModule({
  declarations: [
    AppComponent, HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService], // Global /shared Service
  bootstrap: [AppComponent]
})
////////////////////////////////////////////////////////////////

# Synchronous ,Asynchronous Services:

Synchronous returns data immedately.
Asynchronous returns data slowly (delayed operation)

# Asynchronous Programming In javascript:


const getUser = () => {
  setTimeout(() => {
    return {name: 'Max'}
  }, 2000);
};

const user = getUser(); // This doesn't actually fetch the user
console.log(user.name); // This won't work

//Revised Version
:Using callbacks
const getUser = (cb) => {
  setTimeout(() => {
    cb({name: 'Max'});
  }, 2000);
};

getUser((user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
})

Using Named Functions:
// Use an anonymous function
getUser((user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
})
// Alternatively, use a named function:
getUser(handleUser); // <- This also works, just make sure to NOT execute the function here (handleUser() would be wrong!)
const handleUser = (user) => {
  console.log(user.name); // Prints 'Max' after 2 seconds
};
# WELCOME TO CALLBACK HELL

//callback hell: 

const checkAuth = (cb) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    setTimeout(() => {
        cb({
            isAuth: true
        });
    }, 2000);
};
const getUser = (authInfo, cb) => {
    if (!authInfo.isAuth) {
        console.log('authentication fails')
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({
            name: 'Max'
        });
    }, 2000);
};
checkAuth((authInfo) => {
    getUser(authInfo, (user) => {
        console.log(user.name);
    });
});

////The below logic is hard to write///may be end up with callback hell.

checkAuth((authInfo) => {
  getUser(authInfo, (user) => {
    console.log(user.name);
  });
});

////
//callback hell: 

const checkAuth = (cb) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    setTimeout(() => {
        cb({
            isAuth: true
        });
    }, 2000);
};
const getUser = (authInfo, cb) => {
    if (!authInfo.isAuth) {
        console.log('authentication fails')
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({
            name: 'Subramanian'
        });
    }, 2000);
};
const getUserName = (user, cb) => {
    if (user.name !== 'Subramanian') {
        //console.log('Name does not match');
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({
            status: 'You are authenticated Person'
        });
    }, 2000);
}
checkAuth((authInfo) => {
    getUser(authInfo, (user) => {
        //console.log(user.name);
        getUserName(user, (status) => {
            console.log(status)
        });
    });
});

Features of callback Hell:
This problem is referred to as callback hell. It really can be a hell because you'll have a hard time changing one of your many layers of callbacks. Debugging it can be a pain and it certainly isn't readable anymore once you reach three or four levels of nesting.

>Also don't forget error handling.

# PROMISING A BETTER FUTURE

Callbacks are okay for single asynchronous operations but they certainly aren't perfect, we know that now. Fortunately, we're not the only ones discovering this issue. ES6 introduces a solution: Promises! Indeed, with the help of various third-party libraries, you could and can use the concept of promises in an ES5 code already. Here's how a promise works in JavaScript.

Using Promise Solves All problems of callback nesting:
//callback hell: 

const getUser = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'Max'
            });
        }, 2000);
    });
};

const checkAuth = (role) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    return new Promise((resolve, reject) => {
        if (role === 'admin') {
            setTimeout(() => {
                resolve({
                    isAuth: true
                });
            }, 2000);
        } else {
            setTimeout(() => {
                reject({
                    isAuth: false
                });
            }, 2000);
        }
    });

};

//getUser().then((user) => console.log(user.name));
checkAuth('admin')
    .then(authStatus => getUser(authStatus))
    .then(user => console.log(user.name))
    .catch(error => console.log(error));

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Async Service:
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HERO } from './hero-mock-data';
import { resolve } from 'dns';


@Injectable()
export class HeroService {

    // Synchronous
    private getHero(): Hero {
        return HERO;
    }
    // Asynchronous
    getHeroAsync(): Promise<Hero> {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHero()), 5000);
           
        });
    }
}
/////////////////////////////////////////////////////////////////
# Data Binding:
.............

Transfering data  between Controller(Component) and View

Types of Binding:
...............
1.Interpolation.{{}}
2.Property binding. []
3.Event binding.()
4.Attribute binding .[]
5.Class binding. []
6.Style binding. []
7.Two-way data binding with ngModel. [()]

1.Interpolation.{{}}
  Transfering data from Component to View

2.Property Binding
<app-header [title]="'Profile Manager'">
                      | property value(can be any type)
          property  - User defined attributes are called props   

class HeaderComponent{
    title=?;
}
how to assign property value to component's instance variable
we have decorator - @Input()

import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-header',
    template: `<h1 class="well">
                {{title}}
             </h1>
            `
})
export class HeaderComponent {
    // data
    // tslint:disable-next-line:no-inferrable-types
    @Input()
    title: string;
}
<div class="container">
  <app-header [title]="'Tour of Heroes'" ></app-header>
  <hr/>
 <app-hero></app-hero>
</div>

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Property Use cases
1.Property can be passed to component directly
  <app-header [title]="'Profile Manager'">
2.Property's value can be passed from parent to child.
  Parent owns data and child displays data.
  This enables "Single Direction data flow" Model