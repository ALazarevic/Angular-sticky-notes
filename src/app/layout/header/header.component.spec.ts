import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs'
import { StoreModule } from '@ngrx/store';
import { storeReducers } from 'src/app/core/store/store.reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const AngularFireMocks = {
    auth: of({ uid: 'ABC123' })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: AngularFireAuth, useValue: AngularFireMocks },
      ],
      imports: [
        StoreModule.forRoot({ store: storeReducers }),
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
