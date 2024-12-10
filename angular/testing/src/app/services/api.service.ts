import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = environment.apiUrl;
  private http = inject(HttpClient);


  private handleError() {
    return (error: HttpErrorResponse) => {

      return throwError(() => new Error('Something went wrong'));
    }
  }

  public get<R>(url: string): Observable<R> {
    return this.http.get<R>(`${this.API_URL}/${url}`)
      .pipe(
        retry(2),
        catchError(this.handleError())
      )
  }
}
