import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunityPageRoutingModule } from './comunity-routing.module';

import { ComunityPage } from './comunity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunityPageRoutingModule
  ],
  declarations: [ComunityPage]
})
export class ComunityPageModule {}
