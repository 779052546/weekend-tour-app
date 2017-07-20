import {Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  imgarr = [];
  hotImgarr = [];

  constructor(public navCtrl: NavController,
  public routes:RoutesService) {

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



}
