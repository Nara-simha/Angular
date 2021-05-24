import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {TelevisonService} from '../televison.service'
@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent{
  tv:Product[]=[]
  constructor(private dsObj:TelevisonService){
  }
  ngOnInit(){
   this.tv= this.dsObj.getTVData();
  }
}
