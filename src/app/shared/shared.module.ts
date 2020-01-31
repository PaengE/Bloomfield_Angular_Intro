import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { ConvertToSpacePipe } from './convertToSpace.component';
import { ReverseStrPipe } from './stringReverse.component';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacePipe,
    ReverseStrPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacePipe,
    ReverseStrPipe
  ]
})
export class SharedModule { }
