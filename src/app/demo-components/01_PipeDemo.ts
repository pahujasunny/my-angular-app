import { Component } from '@angular/core';

// import following for custom pipe
import { Pipe, PipeTransform } from '@angular/core';
// import {ExponentialStrengthPipe} from './app.pipe.ts'

@Component({
    selector: 'app-pipedemo',
    template: `
            <div>
             <h1>{{today | date | uppercase}}</h1>
            </div>
    `
})

export class PipeDemoComponent {
    today = new Date();
}

// // code for custom pipe
// @Pipe({name: 'exponentialStrength'})
// export class ExponentialStrengthPipe implements PipeTransform {
//   transform(value: number, exponent: string): number {
//     let exp = parseFloat(exponent);
//     return Math.pow(value, isNaN(exp) ? 1 : exp);
//   }
// }
