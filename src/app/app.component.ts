import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status:boolean=true;
  changeStatus()
  {
    this.status=!this.status;
  }

  ar:string[]=[];
  sendUser(data)
  {
    this.ar.push(data);
  }
  deleteUser(index)
  {
    this.ar.splice(index,1)
  }
}
