import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { tap } from 'rxjs';

export const infoInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(LoggerService);

  logger.log(`Request [${req.method}] - ${req.url}`);

  return next(req).pipe(
    tap(httpEvent => {
      if(httpEvent.type === HttpEventType.Response) {
        logger.log(`Response [${httpEvent.status}] - ${httpEvent.url}`)
      }
    })
  );
};
