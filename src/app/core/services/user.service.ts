import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store.reducers';
import { UpdateUser } from '../store/store.actions';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = {
    id: '',
    email: '',
    name: ''
  };

  constructor(private firebaseAuth: AngularFireAuth, private store: Store<AppState>) { }

  /**
   * Method which will sign up user on Firebase.
   * @param email user email
   * @param password user password
   */
  public signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Method which will sign in user on Firebase.
   * @param email user email
   * @param password user password
   */
  public signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Sign out user from application.
   */
  public signOut() {
    return this.firebaseAuth.auth.signOut();
  }

  /**
   * Check if user is already signed in.
   */
  public isUserSignedIn() {
    return this.firebaseAuth.authState.pipe(
      map(user => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.user.name = user.displayName;

          this.store.dispatch(new UpdateUser(this.user));
          return this.user;
        } else {
          this.user.id = '';
          this.user.email = '';
          this.user.name = '';

          this.store.dispatch(new UpdateUser(this.user));
          return null;
        }
      })
    )
  }
}
