import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RoutesService} from "../../routes.service";
//import {Http} from "@angular/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  amount;
  sid;
  numArray = [];
  total = 0;
  items = [];
  constructor(public navCtrl: NavController ,public alertCtrl: AlertController ,public RoutesService:RoutesService) {

  }
  ngOnInit():void{

    setInterval(()=>{
      this.RoutesService.contactget().subscribe(data=>{
        // console.log(data);
        this.numArray = data;
        //console.log(this.numArray);
        this.getTotal();
      });
    },1000)

  }
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
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '亲',
      subTitle: '真的不能再少了',
      buttons: ['好吧']
    });
    alert.present();
  }

  getTotal(){

    this.total =0;
    for (var i = 0; i < this.numArray.length; i++){
      this.total += this.numArray[i].price * this.numArray[i].amount;
    }
  }
  zhifu(all){

  }
  jia(all){
    all.amount += 1;
    this.contput(all.amount,all.id);
    this.getTotal();
  }
  del(all){
    if (confirm('确定删除吗?')){
      this.sid = all.id;
      console.log(this.sid);
      this.contdel(this.sid);
      this.RoutesService.contactget().subscribe(data=>{
        // console.log(data);
          this.numArray = data;
      });
    }
  }
  jian(all){
    all.amount -= 1;
    if(all.amount<1){
      all.amount = 1;
      this.showAlert();
    }
    this.contput(all.amount,all.id);
    this.getTotal();
  }

  contput(amount?:number,id?:number){
    this.RoutesService.contactput(amount,id).subscribe();
  }
  contdel(sid?:number){
    this.RoutesService.contactdel(sid).subscribe(data=>{

    });
  }


}
