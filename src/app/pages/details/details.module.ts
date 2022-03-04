import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBelr5fDWyhUbRd3o6AZBKSpyi-apu5h2Q'
    })
  ],
  declarations: [DetailsPage]
})
export class DetailsPageModule {}
