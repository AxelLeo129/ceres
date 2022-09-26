import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CErecipesPage } from './cerecipes.page';

const routes: Routes = [
  {
    path: '',
    component: CErecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CErecipesPageRoutingModule {}
