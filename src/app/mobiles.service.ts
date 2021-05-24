import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {

  constructor() {}

      private mobiles:Product[]=[
      {
        productTitle:"Iphone 12 Pro Max",
        description:"1,38,999.00",
        productImage:"https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg"
      },
      {
        productTitle:"Iphone 12 Pro",
        description:"1,19,900.00",
        productImage:"https://m.media-amazon.com/images/I/71cSV-RTBSL._SL1500_.jpg"
      },
      {
        productTitle:"Iphone 12",
        description:"77,900.00",
        productImage:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg"
      },
      {
        productTitle:"Oneplus 9 Pro",
        description:"64.999.00",
        productImage:"https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg"
      },
      {
        productTitle:"Oneplus 9",
        description:"54,999.00",
        productImage:"https://m.media-amazon.com/images/I/61fy+u9uqPL._SL1500_.jpg"
      },
      {
        productTitle:"Oneplus 9R",
        description:"39,999.00",
        productImage:"https://images-na.ssl-images-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg"
      }
    ];
    getMobilesData(){
      return this.mobiles;
    }
}
