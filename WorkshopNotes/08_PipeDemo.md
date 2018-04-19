

/////////////////////////// 1. Pipe Usage
///////////////////////////
import { Component } from '@angular/core';


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


/////////////////////////// 2. Custome Pipe Demo
///////////////////////////
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
app.pipe.ts
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
app.module.ts
import {ExponentialStrengthPipe} from './app.pipe.ts'

declartions:[ExponentialStrengthPipe]