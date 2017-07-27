import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import 'rxjs/add/operator/map';
import {RoutesService} from "../../routes.service";
import {HomeOnePage} from "../home-one/home-one";
import {PlPage} from "../pl/pl";
import {SljzPage} from "../sljz/sljz";
import {HotPage} from "../hot/hot";
import {YcssPage} from "../ycss/ycss";
import {ZlPage} from "../zl/zl";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit{
  searcharr=[];
  searchQuery: string = '';
  items=[];
  minPrice:object;
  minP = [];
  isShow:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes:RoutesService) {
    this.initializeItems();
  }

  ngOnInit():void{
    this.routes.searchImages().subscribe(data=>{
      this.searcharr = data;
      //console.log(this.searcharr)
      this.routes.callBack(this.searcharr,this.routes,this.minPrice,this.minP);
    })
  }
  initializeItems() {
    this.items = this.minP;
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        this.isShow = true;
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.isShow = false;
    }
  }

  back(){
    this.navCtrl.pop(HomePage);
  }

  detail(params?:object){
    this.navCtrl.push(HomeOnePage,{img:params})
  }

  pl(){
    this.navCtrl.push(PlPage)
  }
  sljz(){
    this.navCtrl.push(SljzPage)
  }
  yx(){
    this.navCtrl.push(HotPage)
  }
  ycss(){
    this.navCtrl.push(YcssPage)
  }
  zl(){
    this.navCtrl.push(ZlPage)
  }
}
