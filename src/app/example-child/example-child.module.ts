import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleChildComponent } from './components/example-child/example-child.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ExampleChildComponent]
})
export class ExampleChildModule { }
