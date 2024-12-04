import { CanMatchFn } from '@angular/router';

export const randomGuard: CanMatchFn = (route, segments) => {
  return Math.random() > 0.5;
};
