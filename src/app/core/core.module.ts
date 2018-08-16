import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

import { DoSomethingService } from './services/do-something.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [HomeComponent],
  providers: [DoSomethingService],
})
export class CoreModule { }
