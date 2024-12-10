import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);

  private handleError() {
    return (error: HttpErrorResponse) => {
      return throwError(() => new Error('Something went wrong'));
    }
  }

  public get<R>(url: string): Observable<R> {
    return this.http.get<R>(url)
      .pipe(
        retry(2),
        catchError(this.handleError())
      )
  }
}
