import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getActiveUser(): Observable<User> {
    return timer(2000)
      .pipe(
        map(_ => ({
          id: 123,
          name: 'Marcin',
          email: 'email@example.com',
          age: 19
        }))
      )
  }
}
