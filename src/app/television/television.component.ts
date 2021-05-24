import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent{
  tv:Product[]=[
    {
      productTitle:"OnePlus TV Y Series",
      description:"14 999",
      productImage:"https://oasis.opstatics.com/content/dam/oasis/page/store/tv/new/TV-Y1280_1016.jpg"
    },
    {
      productTitle:"OnePlus TV U Series",
      description:"52 999",
      productImage:"https://oasis.opstatics.com/content/dam/oasis/page/store/tv/new/U_TV_Scenes_1280x1016.jpg"
    },
    {
      productTitle:"OnePlus TV Q1 Series",
      description:"62 900",
      productImage:"https://oasis.opstatics.com/content/dam/oasis/page/store/tv/new/Q1_TV_Scenes_1280x1016.jpg"
    },
    {
      productTitle:"Sony A9G OLED",
      description:"299,900",
      productImage:"https://www.sony.co.in/image/7bedba2f19ee9130c0997a90cc2b976c?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"
    },
    {
      productTitle:"Sony A8H OLED",
      description:"209,900",
      productImage:"https://www.sony.co.in/image/4443c62f0da678f768c11b44a3f045fc?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"
    },
    {
      productTitle:"Sony A8G OLED",
      description:"249,900",
      productImage:"https://www.sony.co.in/image/9b063b9c088d78ccbb4ce94ec4f82139?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"
    }
  ]
  
}
