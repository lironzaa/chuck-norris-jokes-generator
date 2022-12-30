import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/chuck-norris', pathMatch: 'full' },
  {
    path: 'chuck-norris',
    loadChildren: () => import('./chuck-norris/chuck-norris.module').then(cn => cn.ChuckNorrisModule)
  } ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
