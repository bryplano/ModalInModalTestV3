import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildModalPage } from './child-modal';

@NgModule({
  declarations: [
    ChildModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildModalPage),
  ],
})
export class ChildModalPageModule {}
