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
  };

}
