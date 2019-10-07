import { Component } from '@angular/core';
import { ModalController, NavParams, NavController } from 'ionic-angular';
import { ParentModalPage } from '../parent-modal/parent-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  presentParentModal() {
    let parentModal = this.modalCtrl.create(ParentModalPage);
    parentModal.present();
  }

}
