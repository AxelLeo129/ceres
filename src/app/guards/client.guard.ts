import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    const auth = localStorage.getItem('auth');
    if(auth) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
