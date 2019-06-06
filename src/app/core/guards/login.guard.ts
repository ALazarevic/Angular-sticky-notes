import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean> {

    return this.userService.isUserSignedIn().pipe(
      map(user => {
        if (user) {
          this.router.navigateByUrl('/user/dashboard');
          return false;
        } else {
          return true;
        }
      })
    )
  }
}
