import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from '../core/guards/ensure-module-loaded-once.guard';
import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentsRoutingModule.components],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ComponentsModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: ComponentsModule) {
    super(parentModule);
  }
}
