import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from '../core/guards/ensure-module-loaded-once.guard';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
    super(parentModule);
  }
}
