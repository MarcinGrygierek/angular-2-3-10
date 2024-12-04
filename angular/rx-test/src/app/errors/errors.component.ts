import { Component, OnInit } from '@angular/core';
import { catchError, map, mergeMap, of, retry, tap, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-errors',
  imports: [],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.scss'
})
export class ErrorsComponent implements OnInit {
  ngOnInit(): void {
    timer(1000)
      .pipe(
        tap(() => console.log('I am trying...')),
        mergeMap(_ => {
          if (Math.random() > 0.5) return of('Everything ok')
          return throwError(() => 'This is incorrect')
        }),
        retry(5),
        catchError((error) => {
          console.log(error)
          return of()
        })
      )
      .subscribe(val => console.log(val))
  }
}
