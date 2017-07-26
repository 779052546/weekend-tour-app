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
  minPrice : object;
  minP = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public routes:RoutesService,) {
  }

  ngOnInit():void{
    this.routes.hotImages().subscribe(data=>{
      this.hotimgarr = data;
      //console.log(this.hotimgarr)

      // for (var i = 0;i<this.hotimgarr.length;i++){
      //   this.routes.minprice(this.hotimgarr[i].id).subscribe(data=>{
      //     this.minPrice = data;
      //     this.minP.push(this.minPrice[0])
      //   })
      // }
      this.routes.callBack(this.hotimgarr,this.routes,this.minPrice,this.minP);
    })
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }

  ionViewDidLoad() {

  }



}
