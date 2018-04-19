import { Injectable } from '@angular/core';

import { ExpenseModal } from '../classes/ExpenseModal';

// import { ExpenseMockData } from '../mock-data/ExpenseList';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'; // angular 5

import { Observable } from 'rxjs/Observable';

import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';
import { of } from 'rxjs/observable/of';

// httpOptions added to post data for service (Add Expense)
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ExpenseManagerService {

    private url = 'http://localhost:8083/api/expenselist';

    constructor(private http: HttpClient) { }

    // // Sync Method to get users
    // getExpensesSync(): Array<ExpenseModal> {
    //     return ExpenseMockData;
    // }

    // // Async style
    // // Create Private sync Method to be used by Async get request
    // private getExpenses(): Array<ExpenseModal> {
    //     return ExpenseMockData;
    // }
    // getExpensesAsync(): Promise<ExpenseModal[]> {
    //     return new Promise (resolve => {
    //         setTimeout(() => resolve(this.getExpenses()), 5000);
    //     });
    // }

    // Code For using HTTP Client Module to get data from server
    getExpensesFromserver(): Observable<ExpenseModal[]> {
        // const url = 'http://localhost:8083/api/expenselist';
        return this.http.get<ExpenseModal[]>(this.url);
    }

    // /** POST: add a new expense to the server */
    // addExpense (expenseToBeSaved: ExpenseModal): Observable<ExpenseModal[]> {
    //     // const postUrl = 'http://localhost:8083/api/expenselist';  // URL to web api

    //     return this.http.post<ExpenseModal[]>(this.url, expenseToBeSaved, httpOptions).pipe(
    //       tap((expenseLatestList: ExpenseModal[]) => console.log(expenseLatestList)),
    //       catchError(this.handleError<ExpenseModal[]>('addExpense'))
    //     );
    //     // return this.http.post<ExpenseModal[]>(this.url, expenseToBeSaved, httpOptions);
    //   }

    addExpense (expenseToBeSaved: ExpenseModal): Observable<ExpenseModal> {
      // const postUrl = 'http://localhost:8083/api/expenselist';  // URL to web api

      return this.http.post<ExpenseModal>(this.url, expenseToBeSaved, httpOptions).pipe(
        tap((expenseLatestList: ExpenseModal) => console.log(expenseLatestList)),
        catchError(this.handleError<ExpenseModal>('addExpense'))
      );
      // return this.http.post<ExpenseModal[]>(this.url, expenseToBeSaved, httpOptions);
    }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }


    //   addHero (hero: Hero): Observable<Hero> {
    //     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    //       tap((hero: Hero) => console.log('added method')),
    //       catchError(this.handleError<Hero>('addHero'))
    //     );
    //   }

    // addHero (hero: Hero): Observable<Hero> {
    //     return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
    //       tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    //       catchError(this.handleError<Hero>('addHero'))
    //     );
    //   }


}
