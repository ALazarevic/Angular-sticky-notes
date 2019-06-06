import { TestBed, inject } from '@angular/core/testing';
import { LoginGuard } from './login.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from '../store/store.reducers';

describe('LoginGuard', () => {

  const AngularFireMocks = {
    auth: of({ uid: 'ABC123' })
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        { provide: AngularFireAuth, useValue: AngularFireMocks },
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ store: storeReducers }),
      ]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
