import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["/login"]);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule), ...canActivate(redirectUnauthorizedToLogin),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule), ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'details/:table/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule), ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'detrecipes/:table/:id',
    loadChildren: () => import('./pages/detrecipes/detrecipes.module').then( m => m.DetailsPageModule), ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module').then( m => m.RecipesPageModule), ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule), ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'comunity',
    loadChildren: () => import('./pages/comunity/comunity.module').then( m => m.ComunityPageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./pages/post/post.module').then( m => m.PostPageModule)
  },  {
    path: 'cerecipes',
    loadChildren: () => import('./pages/cerecipes/cerecipes.module').then( m => m.CErecipesPageModule)
  }



  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
