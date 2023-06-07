import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TsService } from '../services/ts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private tsService: TsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.tsService.getUser();

    if (Object.keys(user).length > 0) {
      if (route.data['roles'] && route.data['roles'].indexOf(user.roles[0]) === -1) {
        alert("You are user " + user.roles[0] + " and don't have access to this route");
        this.tsService.signOut()
        return false;
      }

      return true;
    }

    this.tsService.signOut()
    return false;
  }
}
