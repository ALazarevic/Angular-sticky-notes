import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from 'src/app/core/store/store.reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const AngularFireMocks = {
    auth: of({ uid: 'ABC123' })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({ store: storeReducers }),
        RouterTestingModule
      ],
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireMocks },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
