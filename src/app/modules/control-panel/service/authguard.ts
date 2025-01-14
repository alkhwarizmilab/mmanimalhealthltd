import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = true;/* this.checkAuthentication();*/
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
    }
    return isAuthenticated;
  }

  private checkAuthentication(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
