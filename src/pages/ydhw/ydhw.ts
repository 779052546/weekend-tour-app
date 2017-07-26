import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";

/**
 * Generated class for the YdhwPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ydhw',
  templateUrl: 'ydhw.html',
})
export class YdhwPage implements OnInit{
  ydhwimgarr = [];
  minPrice:object;
  minP = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
  }

  ngOnInit():void{
    this.routes.ydhwImages().subscribe(data=>{
      this.ydhwimgarr = data;
      this.routes.callBack(this.ydhwimgarr,this.routes,this.minPrice,this.minP);
    })
  }

   goonepage(params?:object){
     this.navCtrl.push(HomeOnePage,{img:params})
    }

  ionViewDidLoad() {

  }

}
