import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParentModalPage } from './parent-modal';

@NgModule({
  declarations: [
    ParentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ParentModalPage),
  ],
})
export class ParentModalPageModule {}
