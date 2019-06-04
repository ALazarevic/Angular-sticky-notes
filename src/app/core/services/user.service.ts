import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebaseAuth: AngularFireAuth) { }

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
}
