import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientGuard } from './guards/client.guard';

//Cambios de rama example

const routes: Routes = [
  {
    path: '',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'list',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'details/:table/:id',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'detrecipes/:table/:id',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/detrecipes/detrecipes.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'recipes',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'profile',
    canActivate: [ClientGuard],
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
