import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  estaLogueado = signal(false)

  login(): void{
    this.estaLogueado.set(true);
  }

  logout(): void{
    this.estaLogueado.set(false);
  }


}
