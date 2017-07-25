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
  items = [];
  minPrice :object;
  minP = [];
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.items = [];
      for (var i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  constructor(public navCtrl: NavController ,
  public routes:RoutesService) {

  }

  ngOnInit():void{
    this.routes.jdImages().subscribe(data=>{
      this.jdimgarr = data;
      //console.log(this.jdimgarr)

      for (var i = 0;i<this.jdimgarr.length;i++){
        this.routes.minprice(this.jdimgarr[i].id).subscribe(data=>{
          this.minPrice = data;
          this.minP.push(this.minPrice[0])
        })
      }
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
