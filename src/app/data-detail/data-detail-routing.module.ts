import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataDetailPage } from './data-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DataDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDetailPageRoutingModule {}
