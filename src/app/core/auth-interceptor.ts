import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (authService.estaLogueado()){
    const reqToken = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token-falso-123')
    })
     return next(reqToken);
  }
 


  return next(req);
};
