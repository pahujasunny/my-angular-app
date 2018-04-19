import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { USERLIST } from '../mock-data/UserList';
// import { Promise } from 'q';
// import { resolve } from 'url';
// import { setTimeout } from 'timers';

// Code For using HTTP Client Module to get data from server
import { HttpClientModule, HttpClient } from '@angular/common/http'; // angular 5
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserListService {

    constructor(private http: HttpClient) { }

    // Sync Method to get users
    getUserList(): Array<User> {
        return USERLIST;
    }

    // Private sync Method to be used by Async get users
    private getUsers(): Array<User> {
        return USERLIST;
    }

    getUserListAsync(): Promise<User[]> {
        return new Promise (resolve => {
            setTimeout(() => resolve(this.getUsers()), 5000);

});
    }

        // Code For using HTTP Client Module to get data from server
        getUserListFromserver(): Observable<User[]> {
            const url = 'http://localhost:8081/api/userlist';
            return this.http.get<User[]>(url);
        }
}


