import { Injectable, signal } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = signal<boolean>(false);
  public isAuthenticated = this._isAuthenticated.asReadonly();

  login() {
    timer(200).subscribe(() => {
      this._isAuthenticated.set(true);
    })
  }
}
