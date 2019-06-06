import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.userService.isUserSignedIn().pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this.router.navigateByUrl('/user');
          return false;
        }
      })
    )
  }
}
