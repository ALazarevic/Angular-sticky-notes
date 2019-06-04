import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public signInForm: FormGroup;
  public signUpForm: FormGroup;
  public showLogin: boolean = true;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initializeSignInForm();
    this.initializeSignUpForm();
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
    })
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
      console.log('USER SIGNED IN', response)
    })
      .catch(error => {
        console.log('ERROR SIGN IN', error);
      })
  }

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
}
