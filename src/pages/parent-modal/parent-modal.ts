import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ChildModalPage } from '../child-modal/child-modal';

/**
 * Generated class for the ParentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent-modal',
  templateUrl: 'parent-modal.html',
})
export class ParentModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentModalPage');
  }

  presentChildModal() {
    let childModal = this.modalCtrl.create(ChildModalPage);
    childModal.present();
  }

  dismiss() {
    console.log('Dismissing parent modal')
    this.viewCtrl.dismiss();
  }

}
