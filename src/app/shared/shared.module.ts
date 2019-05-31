import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from '../core/guards/ensure-module-loaded-once.guard';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class SharedModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded.
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    super(parentModule);
  }
}
