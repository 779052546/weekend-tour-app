import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit{
  searcharr=[];
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
    this.initializeItems();
  }

  ngOnInit():void{
    this.routes.hotImages().subscribe(data=>{
      this.searcharr = data;
      console.log(this.searcharr)
    })
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  back(){
    this.navCtrl.pop(HomePage);
  }

}
