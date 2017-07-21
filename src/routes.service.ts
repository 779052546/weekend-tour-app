/**
 * Created by 123 on 2017/7/19.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class RoutesService{
  constructor(public http:Http) {}
  getImages(){
    return this.http.get('http://localhost:3000/dqtp')
      .map(res=>res.json().data)
  }

  gethotImages(){
    return this.http.get('http://localhost:3000/dqtp/hot')
      .map(res=>res.json().data)
  }

  hotImages(){
    return this.http.get('http://localhost:3000/dqtp/hotimg')
      .map(res=>res.json().data)
  }

  ydhwImages(){
    return this.http.get('http://localhost:3000/dqtp/ydhwimg')
      .map(res=>res.json().data)
  }

  plImages(){
    return this.http.get('http://localhost:3000/dqtp/plimg')
      .map(res=>res.json().data)
  }

  sljzImages(){
    return this.http.get('http://localhost:3000/dqtp/sljzimg')
      .map(res=>res.json().data)
  }

  ycssImages(){
    return this.http.get('http://localhost:3000/dqtp/ycssimg')
      .map(res=>res.json().data)
  }

  zlImages(){
    return this.http.get('http://localhost:3000/dqtp/zlimg')
      .map(res=>res.json().data)
  }
}
