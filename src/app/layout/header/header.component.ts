import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, State } from 'src/app/core/store/store.reducers';
import { UpdateUser } from 'src/app/core/store/store.actions';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean = true;
  public isUserPresent: boolean = false;
  private subscription: Subscription;
  public user: User = {
    id: '',
    name: '',
    email: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.subscription = this.store.select('store').subscribe((state: State) => {
      if (state.user) {
        this.isUserPresent = state.user.id ? true : false;
      }
    })
  }

  /**
   * Sign out user from application.
   */
  public signOut(): void {
    this.userService.signOut().then(
      response => {
        this.router.navigateByUrl('user');
        this.user.id = null;
        this.user.name = null;
        this.user.email = null;
        this.store.dispatch(new UpdateUser(this.user));
      }
    )
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
