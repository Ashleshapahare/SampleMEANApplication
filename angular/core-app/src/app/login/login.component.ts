import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authenticate.service';
import { Router} from '@angular/router';
import { SessionStorageService, SessionStorage} from 'angular-web-storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private userName: string;
  private password: string;
  private message: string;
  private isError: boolean=false;
  title = 'Core-app';
  constructor(private auth:AuthenticationService, private router:Router, public session:SessionStorageService){}
  onClick() {
    console.log(this.userName, this.password);
    this.auth.authenticate(this.userName, this.password).subscribe(response=>{
      let result = response.json();
      console.log(result);
      if(result.authenticated)
      {
        this.session.set("user", this.userName)
      this.router.navigate(["dashboard"]);
      }
      else 
      {
        this.isError=true;
        this.message= "authentication Failed";
      console.log("authentication failed");
      }
    });
  }
  ngOnInit() {
    this.userName='';
    this.password='';
  }
}
