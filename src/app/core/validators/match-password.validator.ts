import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatchPasswordValidator {
  constructor() { }

  static matchPassword(formControl: AbstractControl) {
    let password = formControl.get('password').value;
    let confirmPassword = formControl.get('confirmPassword').value;
    if (password !== confirmPassword) {
      formControl.get('confirmPassword').setErrors({ matchPassword: true });
    } else {
      formControl.get('confirmPassword').setErrors(null);
    }
  }
}
