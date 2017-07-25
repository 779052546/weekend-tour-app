import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";
/**
 * Generated class for the YcssPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-ycss',
  templateUrl: 'ycss.html',
})
export class YcssPage implements OnInit{

  ycssimgarr = [];
  minPrice:object;
  minP = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
  }

  ngOnInit():void{
    this.routes.ycssImages().subscribe(data=>{
      this.ycssimgarr = data;
      for (var i = 0;i<this.ycssimgarr.length;i++){
        this.routes.minprice(this.ycssimgarr[i].id).subscribe(data=>{
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
    //console.log('ionViewDidLoad YcssPage');
  }

}
