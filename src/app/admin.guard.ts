import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAdmin() ? true : inject(Router).createUrlTree(['/home']);
};
