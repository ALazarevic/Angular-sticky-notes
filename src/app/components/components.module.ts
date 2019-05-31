import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from '../core/guards/ensure-module-loaded-once.guard';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [ComponentsRoutingModule.components],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: []
})
export class ComponentsModule extends EnsureModuleLoadedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded.
  constructor(@Optional() @SkipSelf() parentModule: ComponentsModule) {
    super(parentModule);
  }
}
