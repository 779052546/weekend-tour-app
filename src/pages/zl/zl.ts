import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";

/**
 * Generated class for the ZlPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-zl',
  templateUrl: 'zl.html',
})
export class ZlPage implements OnInit{
  zlimgarr=[];
  minPrice:object;
  minP = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
  }

  ngOnInit():void{
    this.routes.zlImages().subscribe(data=>{
      this.zlimgarr = data;

      for (var i = 0;i<this.zlimgarr.length;i++){
        this.routes.minprice(this.zlimgarr[i].id).subscribe(data=>{
          this.minPrice = data;
          this.minP.push(this.minPrice[0])
        })
      }
    })
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params});
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ZlPage');
  }

}
