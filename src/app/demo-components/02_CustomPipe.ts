//import { Pipe, PipeTransform } from '@angular/core';

//import {ExponentialStrengthPipe} from './app.pipe.ts'

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/

// @Component({
//     selector: 'app-pipedemo',
//     template: `
//             <div>
//              <h1>{{today | date | uppercase}}</h1>
//             </div>
//     `
// })


// @Pipe({name: 'exponentialStrength'})
// export class ExponentialStrengthPipe implements PipeTransform {
//   transform(value: number, exponent: string): number {
//     let exp = parseFloat(exponent);
//     return Math.pow(value, isNaN(exp) ? 1 : exp);
//   }
// }

//declartions:[ExponentialStrengthPipe]