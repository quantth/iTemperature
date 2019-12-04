import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensorPageRoutingModule } from './sensor-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { SensorPage } from './sensor.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SensorPageRoutingModule
  ],
  declarations: [SensorPage]
})
export class SensorPageModule {}
