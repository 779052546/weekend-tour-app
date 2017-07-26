/**
 * Created by 123 on 2017/7/19.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

const url = 'http://localhost:3000/dqtp';
@Injectable()
export class RoutesService{
  constructor(public http:Http) {}

  callBack(can1,can2,can3,can4){
    for (var i = 0;i<can1.length;i++){
      can2.minprice(can1[i].id).subscribe(data=>{
        can3 = data;
        can4.push(can3[0])
      })
      //console.log(this.minP)
    }
  }
  getImages(){
    return this.http.get(url)
      .map(res=>res.json().data)
  }

  gethotImages(){
    return this.http.get(url+'/hot')
      .map(res=>res.json().data)
  }
  // gethotImages(pageNum:number){
  //   return this.http.get(url+'/hot/'+pageNum)
  //     .map(res=>res.json().data)
  // }

  hotImages(){
    return this.http.get(url+'/hotimg')
      .map(res=>res.json().data)

    // return this.http.get(url+'/hotimg',{pageNum}) //Observable<Response>
    //   .toPromise() //Promise<Response>
    //   .then(res=>{
    //     console.log(res.json().data);
    //     return res.json().data;
    //   }) //Promise<Hero>
  }

  ydhwImages(){
    return this.http.get(url+'/ydhwimg')
      .map(res=>res.json().data)
  }

  plImages(){
    return this.http.get(url+'/plimg')
      .map(res=>res.json().data)
  }

  sljzImages(){
    return this.http.get(url+'/sljzimg')
      .map(res=>res.json().data)
  }

  ycssImages(){
    return this.http.get(url+'/ycssimg')
      .map(res=>res.json().data)
  }

  zlImages(){
    return this.http.get(url+'/zlimg')
      .map(res=>res.json().data)
  }

  jdImages(){
    return this.http.get(url+'/jdimg')
      .map(res=>res.json().data)
  }
  searchImages(){
    return this.http.get(url+'/search')
      .map(res=>res.json().data)
  }

  searchId(id:number){
    return this.http.get(url+'/searchId/'+id)
      .map(res=>res.json().data)
  }
  statusId(id:number){
    return this.http.get(url+'/statusId/'+id)
      .map(res=>res.json().data)
  }
  minprice(id:number){
    return this.http.get(url+'/minprice/'+id)
      .map(res=>res.json().data)
  }

  putcar(viewspotsid:number,ticketid:number,price:number){
    return this.http.post(url+'/putcar',{viewspotsid,ticketid,price})
      .map(res=>res.json().data);
  }


  //购物车
  contactget(){
    return this.http.get('http://localhost:3000/index/contactget')
      .map(res=>res.json().data)
  }
  contactpost(ticketid:number){
    return this.http.post('http://localhost:3000/index/contactpost',{ticketid})
      .map(res=>res.json().data)
  }
  contactput(amount:number,id:number){
    return this.http.put('http://localhost:3000/index/contactput',{amount,id})
      .map(res=>res.json().data)
  }
  contactdel(id:number){
    return this.http.delete('http://localhost:3000/index/contactdel/'+id)
      .map(res=>res.json().data)
  }

}
