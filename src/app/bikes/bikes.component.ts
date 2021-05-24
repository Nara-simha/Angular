import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {BikesService} from '../bikes.service'
@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent{
  bikes:Product[]=[];
  constructor(private dsObj:BikesService){}
  ngOnInit(){
    this.bikes= this.dsObj.getBikesData();
   }
}
