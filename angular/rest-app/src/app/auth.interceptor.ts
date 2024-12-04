import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (auth.accessToken) {
    const authReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${auth.accessToken}`)
    })

    return next(authReq);
  }

  return next(req);
};
