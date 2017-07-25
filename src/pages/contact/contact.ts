import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items = [];
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.items = [];
      for (var i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  constructor(public navCtrl: NavController) {

  }

}
