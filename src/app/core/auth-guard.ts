import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';
import { AuthService } from './auth';


export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.estaLogueado()){
    return true;
  }

  router.navigate(['/login']);
  return false;
};
