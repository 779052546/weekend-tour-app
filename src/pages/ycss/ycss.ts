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
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
  }

  ngOnInit():void{
    this.routes.ycssImages().subscribe(data=>{
      this.ycssimgarr = data;
    })
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params});
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad YcssPage');
  }

}
