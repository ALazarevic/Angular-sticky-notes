import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from '../core/guards/ensure-module-loaded-once.guard';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded.
  constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
    super(parentModule);
  }
}
