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