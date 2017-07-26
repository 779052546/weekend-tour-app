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
import {SearchPage} from "../search/search";
import {HomeTwoPage} from "../home-two/home-two";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  imgarr = [];
  hotImgarr = [];
  pageNum = 3;
  minPrice:object;
  minP = [];
  minPrice1:object;
  minP1 = [];

  constructor(public navCtrl: NavController,
  public routes:RoutesService,
  public app:App) {

  }


  ngOnInit():void{
    this.routes.getImages().subscribe(data=>{
      this.imgarr = data;
      for (var i = 0;i<this.imgarr.length;i++){
        this.routes.minprice(this.imgarr[i].id).subscribe(data=>{
          this.minPrice = data;
          this.minP.push(this.minPrice[0])
        })
        //console.log(this.minP)
      }
    })
    this.routes.gethotImages().subscribe(data=>{
      this.hotImgarr = data;
      //console.log(this.hotImgarr)
      for (var i = 0;i<this.hotImgarr.length;i++){
        this.routes.minprice(this.hotImgarr[i].id).subscribe(data=>{
          this.minPrice1 = data;
          this.minP1.push(this.minPrice1[0])
        })
      }
    })
  }


  //下拉更新 (每次更新+3条)  使用时 将次方法this.getData()放在ngOninit里面
  // 且将this.routes.gethotImages()  内全部取消
  // getData(){
  //   this.routes.gethotImages(this.pageNum).subscribe(data=>{
  //     this.hotImgarr = data;
  //   })
  // }
  // doInfinite(infiniteScroll) {
  //   setTimeout(() => {
  //     this.pageNum += 3;
  //     if (this.pageNum > 9){
  //       this.pageNum = 9;
  //       console.log('没有更多了');
  //       return;
  //     }
  //     this.getData();
  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 1000);
  // }


  goonepage(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }

  gotwopage(params?:object){
    this.navCtrl.push(HomeTwoPage,{img:params})
  }
  gohot(){
    this.navCtrl.push(HotPage)
  }
  gopl(){
    this.navCtrl.push(PlPage)
  }
  jdpage(){
    this.navCtrl.parent.select(1)
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

  search(){
    this.navCtrl.push(SearchPage)
  }

}
