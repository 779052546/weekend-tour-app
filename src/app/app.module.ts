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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UserCenterPage,
    HomeOnePage,
    HotPage,
    SljzPage,
    YcssPage,
    ZlPage,
    PlPage,
    YdhwPage,
    SearchPage
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
    HomeOnePage,
    HotPage,
    SljzPage,
    YcssPage,
    ZlPage,
    PlPage,
    YdhwPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RoutesService
  ]
})
export class AppModule {}
