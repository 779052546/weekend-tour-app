import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
  jdimgarr=[];
  constructor(public navCtrl: NavController ,
  public routes:RoutesService) {

  }

  ngOnInit():void{
    this.routes.jdImages().subscribe(data=>{
      this.jdimgarr = data;
    })
  }

  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }
  zan = 13;
  add(){
    this.zan++;
  }
}
