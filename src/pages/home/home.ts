import {Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  imgarr = [];

  constructor(public navCtrl: NavController,
  public routes:RoutesService) {

  }

  ngOnInit():void{
    this.routes.getImages().subscribe(data=>{
      this.imgarr = data;
      console.log(this.imgarr)
    });
  }



}
