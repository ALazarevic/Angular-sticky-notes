import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './core/store/store.reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const AngularFireMocks = {
      auth: of({ uid: 'ABC123' })
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        StoreModule.forRoot({ store: storeReducers })
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireMocks },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
