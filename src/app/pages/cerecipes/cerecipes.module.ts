import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CErecipesPageRoutingModule } from './cerecipes-routing.module';

import { CErecipesPage } from './cerecipes.page';

import {QuillModule} from 'ngx-quill';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CErecipesPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ],
  declarations: [CErecipesPage]
})
export class CErecipesPageModule {}
