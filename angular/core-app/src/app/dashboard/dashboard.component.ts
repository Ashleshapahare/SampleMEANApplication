import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/services/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
   items: any;
   constructor(private itemService:ItemsService){}

   ngOnInit()
   {
     this.itemService.getItems().subscribe(response => 
      {
        console.log(response.json());
        this.items= response.json();
      })
   }
}
 