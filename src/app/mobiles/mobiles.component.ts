import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {MobilesService} from '../mobiles.service'
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobiles:Product[]=[];
  constructor(private dsObj:MobilesService){
  }
  ngOnInit(){
   this.mobiles= this.dsObj.getMobilesData();
  }
}
