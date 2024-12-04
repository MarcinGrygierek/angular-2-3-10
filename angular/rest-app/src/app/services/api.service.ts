import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, count, Observable, of, retry, throwError } from 'rxjs';
import { LoggerService } from './logger.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = environment.apiUrl;
  private http = inject(HttpClient);
  private logger = inject(LoggerService);

  private handleError() {
    return (error: HttpErrorResponse) => {
      this.logger.log(error.message);

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

  public post<R, P>(url: string, body: P): Observable<R> {
    return this.http.post<R>(`${this.API_URL}/${url}`, body)
      .pipe(
        retry(2),
        catchError(this.handleError())
      )
  }
}
