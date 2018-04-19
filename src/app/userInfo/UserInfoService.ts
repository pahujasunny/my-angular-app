import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { USERINFO } from '../mock-data/UserInfo';

@Injectable()
export class UserInfoService {
    getUserInfo(): User {
        return USERINFO;
    }
}


