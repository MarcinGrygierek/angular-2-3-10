import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  getRandomNumber(): Observable<number> {
    return timer(Math.round(Math.random() * 2000 + 500))
      .pipe(map(_ => Math.round(Math.random() * 1000)))
  }
}
