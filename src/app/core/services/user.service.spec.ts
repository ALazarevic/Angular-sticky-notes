import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from '../store/store.reducers';

describe('UserService', () => {
  beforeEach(() => {

    const AngularFireMocks = {
      auth: of({ uid: 'ABC123' })
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireMocks },
      ],
      imports: [
        StoreModule.forRoot({ store: storeReducers }),
      ]
    })
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
