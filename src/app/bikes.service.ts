import { Injectable } from '@angular/core';
import {Product} from '../app/models/product.model'
@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor() {
   }
   bikes:Product[]=[
   {
    productTitle:"Royal Enfield Bullet 350",
    description:"1,31,056",
    productImage:"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-bullet-350-ks--x--efi-bs-vi20200401130113.jpg?q=85"
  },
  {
    productTitle:"Royal Enfield Classic 350",
    description:"1,68,182",
    productImage:"https://imgd.aeplcdn.com/310x174/bw/models/royal-enfield-classic-350-single-channel-abs--bs-vi20200303121804.jpg?q=75"
  },
  {
    productTitle:"Royal Enfield Meteor 350",
    description:"1,80,458",
    productImage:"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-meteor-350-fireball20201106124644.jpg?q=85"
  },
  {
    productTitle:"Royal Enfield Himalayan",
    description:"1,91,853",
    productImage:"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-himalayan-standard--bs-vi20200120132350.jpg?q=85"
  },
  {
    productTitle:"Royal Enfield Continental GT 650",
    description:" 2,89,925",
    productImage:"https://imgd.aeplcdn.com/393x221/bw/models/royal-enfield-continental-gt-650-standard--bs-vi20200212182221.jpg?q=85"
  },
  {
    productTitle:"Royal Enfield Interceptor 650",
    description:"2,73,703",
    productImage:"https://imgd.aeplcdn.com/310x174/bw/models/royal-enfield-interceptor-650-standard--bs-vi20200212180615.jpg?q=75"
  }
];
getBikesData(){
  return this.bikes;
}
}
