import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";

/**
 * Generated class for the SljzPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sljz',
  templateUrl: 'sljz.html',
})
export class SljzPage implements OnInit{
  sljzimgarr=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
  }
  ngOnInit():void{
    this.routes.sljzImages().subscribe(data=>{
      this.sljzimgarr = data;
    })
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params});
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad SljzPage');
  }

}
