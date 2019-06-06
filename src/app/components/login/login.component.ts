import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, State } from 'src/app/core/store/store.reducers';
import { UpdateUser } from 'src/app/core/store/store.actions';
import { Subscription } from 'rxjs';
import { MatchPasswordValidator } from 'src/app/core/validators/match-password.validator';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  public signInForm: FormGroup;
  public signUpForm: FormGroup;
  public showLogin: boolean = true;
  public user: User = {
    id: '',
    name: '',
    email: ''
  };
  public subscription: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.initializeSignInForm();
    this.initializeSignUpForm();

    this.subscription = this.store.select('store').subscribe((state: State) => {
      this.user = state.user;
    })
  }

  /**
   * Method which will initialize form for user sign in.
   */
  private initializeSignInForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  /**
   * Method which will initialize form for user sign up.
   */
  private initializeSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    },
      { validator: MatchPasswordValidator.matchPassword })
  }

  /**
   * When user enters character in input, move label up.
   * @param event Keyboard event
   */
  public moveLabel(event) {
    let input = event.target;
    let label = input.previousElementSibling;

    if (input.value) {
      label.classList.add('active');
    } else {
      if (label.classList.contains('active')) {
        label.classList.remove('active');
      }
    }
  }

  /**
   * Sign up user.
   */
  public signUp() {
    let email = this.signUpForm.get('email').value;
    let password = this.signUpForm.get('password').value;
    let confirmPassword = this.signUpForm.get('confirmPassword').value;

    if (password === confirmPassword) {
      this.userService.signUp(email, password).then(response => {
        console.log('USER SIGNED UP', response);
      })
        .catch(error => {
          console.log('ERROR SIGN UP', error)
        });
    } else {
      console.error('Passwords do not match.');
      return;
    }
  }

  /**
   * Sign in user with email and password
   */
  public signIn() {
    let email = this.signInForm.get('email').value;
    let password = this.signInForm.get('password').value;

    this.userService.signIn(email, password).then(response => {
      this.user.id = response.user.uid;
      this.user.name = response.user.displayName;
      this.user.email = response.user.email;

      this.store.dispatch(new UpdateUser(this.user));
      this.router.navigateByUrl('user/dashboard');
    })
      .catch(error => {
        console.log('ERROR SIGN IN', error);
      })
  }

  /**
   * Form validation getters.
   */
  public get signInEmail() {
    return this.signInForm.get('email');
  }

  public get signInPassword() {
    return this.signInForm.get('password');
  }

  public get signUpEmail() {
    return this.signUpForm.get('email');
  }

  public get signUpPassword() {
    return this.signUpForm.get('password');
  }

  public get signUpConfirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
