import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ItemsService } from 'src/services/items.service';
import { SessionStorageService} from 'angular-web-storage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
   items: any;
   user: any;
   constructor(private itemService:ItemsService, public session:SessionStorageService){}

   ngOnInit()
   {
     this.user=this.session.get("user")
     console.log(this.user);
     this.itemService.getItems().subscribe(response => 
      {
        console.log(response);
        this.items= response.json();
      });
   }
}
 