import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarirPage } from './karir.page';

const routes: Routes = [
  {
    path: '',
    component: KarirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarirPageRoutingModule {}
