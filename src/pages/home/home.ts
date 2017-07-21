import {Component, OnInit } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";
import {HotPage} from "../hot/hot";
import {SljzPage} from "../sljz/sljz";
import {YcssPage} from "../ycss/ycss";
import {ZlPage} from "../zl/zl";
import {PlPage} from "../pl/pl";
import {YdhwPage} from "../ydhw/ydhw";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  imgarr = [];
  hotImgarr = [];

  constructor(public navCtrl: NavController,
  public routes:RoutesService,
  public app:App) {

  }

  ngOnInit():void{
    this.routes.getImages().subscribe(data=>{
      this.imgarr = data;
    })

    this.routes.gethotImages().subscribe(data=>{
      this.hotImgarr = data;
    })
  }


  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }
  gohot(){
    this.navCtrl.push(HotPage)
  }
  gopl(){
    this.navCtrl.push(PlPage)
  }
  hotPage(){
    this.navCtrl.push(HotPage)
  }
  sljzPage(){
    this.navCtrl.push(SljzPage)
  }
  ycssPage(){
    this.navCtrl.push(YcssPage)
  }
  zlPage(){
    this.navCtrl.push(ZlPage)
  }
  plPage(){
    this.navCtrl.push(PlPage)
  }
  ydhwPage(){
    this.navCtrl.push(YdhwPage)
  }



}
