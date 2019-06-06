import { Injectable} from "@angular/core";
import { Http, Headers} from "@angular/http";
import { SessionStorageService } from 'angular-web-storage';
//import {Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
}) 
export class ItemsService {
  private url= 'http://localhost:9000/'
  
user:any;

  constructor(private http:Http, public session:SessionStorageService){}


  getItems(){
      this.user=this.session.get("user")
      let itemsUrl= this.url+'user/items/' + this.user;
      let header= new Headers;
      header.append('content-type','application/json');
      return this.http.get(itemsUrl,{headers:header});
  }
}