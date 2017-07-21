import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-one',
  templateUrl: 'home-one.html',
})
export class HomeOnePage {
  imgdetail;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imgdetail = this.navParams.get('img');
  }

  ionViewDidLoad() {

  }

}
