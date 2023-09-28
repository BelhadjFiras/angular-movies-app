import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
  today = new Date();
  imageUrl = 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg';
  imageWidth = 100;
  price = 10;
  sellingPrice = 15.50;
  attributeValue= "movies app test value";
  timeNow = new Date;
  pcolor = "";
  setTimeToNow(){
    console.log(new Date)
    this.timeNow=new Date;
  }
  setTextColor(_color: string){
    this.pcolor= _color;


  }
}
