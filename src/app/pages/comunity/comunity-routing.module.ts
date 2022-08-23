import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunityPage } from './comunity.page';

const routes: Routes = [
  {
    path: '',
    component: ComunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunityPageRoutingModule {}
