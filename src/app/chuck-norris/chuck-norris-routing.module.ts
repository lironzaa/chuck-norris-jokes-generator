import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChuckNorrisComponent } from "./chuck-norris.component";
import { JokesCategoriesResolver } from "./resolvers/jokes-categories.resolver";

const routes: Routes = [
  {
    path: '',
    component: ChuckNorrisComponent,
    resolve: {
      jokesCategories: JokesCategoriesResolver
    }
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ChuckNorrisRoutingModule {
}
