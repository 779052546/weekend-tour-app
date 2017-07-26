import {Component,OnInit} from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "./Login/Login";
import {OrderPage} from "./Order/Order";
import {MessagePage} from "./Message/Message";
import {AboutusPage} from "./Aboutus/Aboutus";
import {IdeaPage} from "./Idea/Idea";
import {ServicePage} from "./Service/Service";
import {SetPage} from "./Set/Set";
import {UserProvider} from "../../providers/user/user";

@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage implements  OnInit{

  status;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userProvider:UserProvider){

  }

  ngOnInit(){

  }

  ionViewWillEnter(){
    this.userProvider.isLogin() ?
      this.status = this.userProvider.user.name :
      this.status='未登录';
  }

  go(){
    if(!this.userProvider.user){
      this.navCtrl.push(LoginPage);
    }
  }
  set(){
    if(!this.userProvider.user)
    {
      this.navCtrl.push(LoginPage);
    }else{
      this.navCtrl.push(SetPage);
    }
  }
  order(){
    if(!this.userProvider.user)
    {
      this.navCtrl.push(LoginPage);
    }else {
      this.navCtrl.push(OrderPage);
    }
  }
  message(){
    if(!this.userProvider.user)
    {
      this.navCtrl.push(LoginPage);
    }else {
      this.navCtrl.push(MessagePage);
    }
  }
  aboutUs(){
    this.navCtrl.push(AboutusPage);
  }
  ideaBack(){
    if(!this.userProvider.user)
    {
      this.navCtrl.push(LoginPage);
    }else {
      this.navCtrl.push(IdeaPage);
    }
  }
  cService(){
    this.navCtrl.push(ServicePage);
  }
}
