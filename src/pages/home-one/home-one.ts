import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {RoutesService} from "../../routes.service";

/**
 * Generated class for the HomeOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-one',
  templateUrl: 'home-one.html',
})
export class HomeOnePage implements OnInit{
  imgdetail;
  idArr=[];
  statusArr=[];
  maxPrice:number;
  putcar;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public routes :RoutesService,
  public alertCtrl:AlertController) {
    this.imgdetail = this.navParams.get('img');
    //console.log(this.imgdetail);
  }
  showAlert(s){
    let alert = this.alertCtrl.create({
      title:'票价详情',
      subTitle:s,
      buttons:['确认']
    });
    alert.present();
  }

  ngOnInit():void{
    this.routes.searchId(this.imgdetail.id).subscribe(data=>{
      this.idArr = data;
      //console.log(this.idArr);

        this.maxPrice = this.imgdetail['maxprice'];
        this.imgdetail.price = this.imgdetail['minprice'];
        //console.log(this.imgdetail)
        this.routes.statusId(this.imgdetail.id).subscribe(data=>{
          this.statusArr = data;
          //console.log(this.statusArr);
          this.changeStatus('isBack','不可退','随时退')
          this.changeStatus('isAssurance','有保险','无保险')
          this.changeStatus('isWifi','有WIFI','无WIFI')
          this.changeStatus('isP','有停车位','无停车位')
          if (this.statusArr[0]['ageLimit'] == 0){
            this.statusArr[0]['ageLimit']= '年龄无限制'
          }else{
            this.statusArr[0]['ageLimit']= '年龄有限制'
          }
          //console.log(this.statusArr)
        })
    })
  }

  changeStatus(can1,can2,can3){
    if (this.statusArr[0][can1] == 1){
      this.statusArr[0][can1]= can2
    }else{
      this.statusArr[0][can1]= can3
    }
  }

  ionViewDidLoad() {

  }

  alte(s,y,z){
    this.routes.putcar(s,y,z).subscribe(data=>{
      this.putcar = data;
      if(this.putcar == 'success'){
        this.showAlert1('添加购物车成功')
      }else{
        this.showAlert1('添加购物车失败,请重试!')
      }
    })
  }

  showAlert1(s){
    let alert = this.alertCtrl.create({
      title:'详情',
      subTitle:s,
      buttons:['确认']
    });
    alert.present();
  }

}
