import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AuthResponse, LoginDto, RegisterDto } from '../types/auth';
import { tap } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = inject(ApiService);
  private logger = inject(LoggerService);
  private _accessToken: string = '';

  get accessToken() {
    return this._accessToken;
  }

  register(dto: RegisterDto) {
    return this.api.post<AuthResponse, RegisterDto>('register', dto)
  }

  login(dto: LoginDto) {
    return this.api.post<AuthResponse, LoginDto>('login', dto)
      .pipe(
        tap(response => {
          if (response.accessToken) {
            this._accessToken = response.accessToken;
            this.logger.log(`Received accessToken ${response.accessToken}`)
          }
        })
      )
  }
}
