import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RoutesService} from "../../routes.service";
import 'rxjs/add/operator/map';
import {HomeOnePage} from "../home-one/home-one";

/**
 * Generated class for the PlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pl',
  templateUrl: 'pl.html',
})
export class PlPage implements OnInit{
  plimgarr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
  }

  ngOnInit():void{
    this.routes.plImages().subscribe(data=>{
      this.plimgarr = data;
    })
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad PlPage');
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }

}
