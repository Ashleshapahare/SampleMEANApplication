import { Injectable} from "@angular/core";
import { Http, Headers} from "@angular/http";
//import {Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
}) 
export class ItemsService {
  private url= 'http://localhost:9000/'
  
  constructor(private http:Http){}

  getItems(){
      let itemsUrl= this.url+'user/items';
      let header= new Headers;
      header.append('content-type','application/json');
      return this.http.get(itemsUrl,{headers:header});

      
  }
}