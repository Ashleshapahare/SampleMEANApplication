import { Injectable} from "@angular/core";
import { Http, Headers} from "@angular/http";
//import {Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
}) 
export class AuthenticationService {
  private url= 'http://localhost:9000/'

    constructor(private http:Http){}

     authenticate(name,password){
       let authenticateUrl= this.url+'user/authenticate';
       let body= JSON.stringify(
         {user_id:name,
         password:password
       } 
       );
       let header= new Headers;
       header.append('Content-type','application/json');
       return this.http.post(authenticateUrl,body,{headers:header});
         //return name+password;
    }
    
  }