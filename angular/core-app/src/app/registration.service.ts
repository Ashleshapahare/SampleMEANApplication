import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    private url= 'http://localhost:9000/'
  
      constructor(private http:Http){}
  

        registerUser(name, password, userType)
        {
          let registerUrl= this.url + 'user/register';
          let user= JSON.stringify(
            {
              user_id: name,
              password: password,
              userType: userType
            }
          );
          let header= new Headers;
          header.append('Content-type', 'application/JSON');
          console.log(user);
          return this.http.post(registerUrl, user, {headers: header});
        }
      }
