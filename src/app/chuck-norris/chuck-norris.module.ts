import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuckNorrisComponent } from './chuck-norris.component';
import { ChuckNorrisRoutingModule } from "./chuck-norris-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  declarations: [
    ChuckNorrisComponent,
    JokesComponent
  ],
  imports: [
    CommonModule,
    ChuckNorrisRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})

export class ChuckNorrisModule {
}
