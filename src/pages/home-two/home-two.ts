import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HomeTwoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-two',
  templateUrl: 'home-two.html',
})
export class HomeTwoPage {
  imgdetail;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl:AlertController) {
    this.imgdetail = this.navParams.get('img');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad HomeTwoPage');
  }

  showAlert(s){
    let alert = this.alertCtrl.create({
      title:'票价详情',
      subTitle:s,
      buttons:['确认']
    });
    alert.present();
  }

}
