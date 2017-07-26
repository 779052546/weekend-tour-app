import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {UserCenterPage} from "../pages/user-center/user-center";
import {SetPage} from "../pages/user-center/Set/Set";
import {EditPage} from "../pages/user-center/Edit/Edit";
import {SharePage} from "../pages/user-center/Share/Share";

import {LoginPage} from "../pages/user-center/Login/Login";
import {RegisterPage} from "../pages/user-center/Register/Register";
import {LostpwdPage} from "../pages/user-center/Lostpwd/Lostpwd";
import {OrderPage} from "../pages/user-center/Order/Order";
import {MessagePage} from "../pages/user-center/Message/Message";
import {AboutusPage} from "../pages/user-center/Aboutus/Aboutus";
import {IdeaPage} from "../pages/user-center/Idea/Idea";
import {ServicePage} from "../pages/user-center/Service/Service";

import {RoutesService} from "../routes.service";
import {HttpModule} from "@angular/http";
import {HomeOnePage} from "../pages/home-one/home-one";
import {HotPage} from "../pages/hot/hot";
import {SljzPage} from "../pages/sljz/sljz";
import {YcssPage} from "../pages/ycss/ycss";
import {ZlPage} from "../pages/zl/zl";
import {PlPage} from "../pages/pl/pl";
import {YdhwPage} from "../pages/ydhw/ydhw";
import {SearchPage} from "../pages/search/search";
import {HomeTwoPage} from "../pages/home-two/home-two";
import {ChoosePage} from "../pages/user-center/Choose/Choose";
import { UserProvider } from '../providers/user/user';





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserCenterPage,
    SetPage,
    EditPage,
    ChoosePage,
    SharePage,
    LoginPage,
    RegisterPage,
    LostpwdPage,
    OrderPage,
    MessagePage,
    AboutusPage,
    IdeaPage,
    ServicePage,
    HomeOnePage,
    HotPage,
    SljzPage,
    YcssPage,
    ZlPage,
    PlPage,
    YdhwPage,
    SearchPage,
    HomeTwoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserCenterPage,
    SetPage,
    EditPage,
    ChoosePage,
    SharePage,
    LoginPage,
    RegisterPage,
    LostpwdPage,
    OrderPage,
    MessagePage,
    AboutusPage,
    IdeaPage,
    ServicePage,
    HomeOnePage,
    HotPage,
    SljzPage,
    YcssPage,
    ZlPage,
    PlPage,
    YdhwPage,
    SearchPage,
    HomeTwoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoutesService,
    UserProvider
  ]
})
export class AppModule {}
