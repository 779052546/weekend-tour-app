import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";

/**
 * Generated class for the HotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html',
})
export class HotPage implements OnInit{
  hotimgarr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public routes:RoutesService,) {
  }

  ngOnInit():void{
    this.routes.hotImages().subscribe(data=>{
      this.hotimgarr = data;
    })
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }

  ionViewDidLoad() {

  }



}
