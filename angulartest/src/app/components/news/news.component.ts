import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';//当做一个服务
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public list:any[]=[];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  getData(){
    //alert('执行请求')
    let api="http://a.itying.com/api/productlist";
    this.http.get(api).subscribe(
      (response:any)=>{
        console.log(response);
        this.list=response.result;
      }
    )
  }

   doLogin(){

  //   //手动设置请求类型
  //   const httpOptions={headers: new HttpHeaders({'Content-Type':'application/json'})}//固定的写法
  //   //var api = .........
  //   // this.http.post(api, {"username":"zhangsan", 'age':20},httpOptions).subscribe() //用subscribe获取服务器响应

  //   // console.log(response)

    

}
getJsonpData(){
  //服务器必须支持jsonp
  //http://a.itying.com/api/productlist?callback=aaaaaaaaaa
  let api = "http://a.itying.com/api/productlist";
  //传入两个参数 url和callbackparameters
  this.http.jsonp(api,'callback').subscribe((data)=>{
    console.log(data);
  }
  );
}













}
