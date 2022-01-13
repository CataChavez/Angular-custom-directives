import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrMessageDirective } from './directives/err-message.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrMessageDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrMessageDirective,
    CustomIfDirective,
  ]
})
export class SharedModule { }
