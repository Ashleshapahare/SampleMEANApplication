import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private userName: string;
  private password: string;
  private confirmpassword: string;
  private userType: string;

  constructor(private register: RegistrationService, private router: Router) { }

  ngOnInit() {

  }
  onClick() {
    console.log(this.userName, this.password, this.userType)
    this.register.registerUser(this.userName, this.password, this.userType).subscribe(success => {
     // if (success) {
       console.log("in success")
        this.router.navigate(["login"]);

      //}
    })

  }
}