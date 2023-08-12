import { NgModule } from '@angular/core';
import { RlibsComponent } from './rlibs.component';
import { ToRupeePipe } from './to-rupee.pipe';



@NgModule({
  declarations: [
    RlibsComponent,
    ToRupeePipe
  ],
  imports: [
  ],
  exports: [
    RlibsComponent
  ]
})
export class RlibsModule { }
