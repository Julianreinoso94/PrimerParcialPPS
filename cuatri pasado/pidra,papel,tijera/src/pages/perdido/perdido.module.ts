import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerdidoPage } from './perdido';

@NgModule({
  declarations: [
    PerdidoPage,
  ],
  imports: [
    IonicPageModule.forChild(PerdidoPage),
  ],
  exports: [
    PerdidoPage
  ]
})
export class PerdidoPageModule {}
