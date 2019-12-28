import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataDetailPageRoutingModule } from './data-detail-routing.module';

import { DataDetailPage } from './data-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataDetailPageRoutingModule
  ],
  declarations: [DataDetailPage]
})
export class DataDetailPageModule {}
