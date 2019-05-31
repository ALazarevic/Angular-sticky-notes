import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private fireAuthService: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.fireAuthService.auth.signInWithEmailAndPassword('test@test.com', 'password123').then(response => {
      console.log('RESPONSE', response);
    }).catch(error => {
      console.log('ERROR', error);
    })
  }

}
