import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './core/store/store.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    StoreModule.forRoot({ store: storeReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
