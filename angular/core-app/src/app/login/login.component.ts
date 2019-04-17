import { Component } from '@angular/core';
import { AuthenticationService } from 'src/services/authenticate.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  private userName: string;
  private password: string;
  private result: string;
  title = 'Core-app';
  constructor(private auth:AuthenticationService, private router:Router){}
  onClick() {
    console.log(this.userName, this.password);
    this.auth.authenticate(this.userName, this.password).subscribe(response=>{
      let result = response.json();
      console.log(result.authenticated);
      if(result.authenticated)
      {
      this.router.navigate(["dashboard"]);
      }
      else 
      {
        this.router.navigate(["/"]);
      console.log("authentication failed");
      }
    });
  }
  ngOnInit() {
    this.userName='';
    this.password='';
  }
}
