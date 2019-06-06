import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from '../store/store.reducers';

describe('AuthGuard', () => {
  beforeEach(() => {
    const AngularFireMocks = {
      auth: of({ uid: 'ABC123' })
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AngularFireAuth, useValue: AngularFireMocks },
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ store: storeReducers }),
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
