import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  getUsers(): Observable<User[]> {
    return timer(1000)
      .pipe(
        map(_ => [
          { id: 1, name: 'Marcin', age: 21, email: 'lorem@ipsum.pl' },
          { id: 2, name: 'Marcin1', age: 2, email: 'lorem2@ipsum.pl' },
          { id: 3, name: 'Marcin2', age: 31, email: 'lorem3@ipsum.pl' },
          { id: 4, name: 'Marcin3', age: 1, email: 'lorem4@ipsum.pl' },
          { id: 5, name: 'Marcin4', age: 3, email: 'lorem5@ipsum.pl' },
          { id: 6, name: 'Marcin5', age: 98, email: 'lorem6@ipsum.pl' },
        ])
      )
  }
}
