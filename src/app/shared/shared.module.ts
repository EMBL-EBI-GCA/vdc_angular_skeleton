import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareExampleComponent } from './components/share-example/share-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShareExampleComponent],
  exports: [ShareExampleComponent]
})
export class SharedModule { }
