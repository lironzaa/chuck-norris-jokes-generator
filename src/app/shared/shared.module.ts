import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { AppSelectComponent } from './UI/inputs/app-select/app-select.component';
import { AppInputTextComponent } from './UI/inputs/app-text/app-input-text.component';
import { PaginatorComponent } from "./UI/paginator/paginator.component";

@NgModule({
  declarations: [
    AppSelectComponent,
    AppInputTextComponent,
    PaginatorComponent,
  ],
  exports: [
    AppSelectComponent,
    AppInputTextComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
