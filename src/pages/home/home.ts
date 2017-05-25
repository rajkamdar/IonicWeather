import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherService } from '../../app/Services/weather.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeatherService]
})
export class HomePage {

  showHi:boolean;
  city:string;
  temperature:number;
  wind:number;
  humidity:number;
  visibility:string;
  constructor(public navCtrl: NavController,private weatherService:WeatherService) {
  	this.showHi=false;
  }
  onButton(no:number){
  	this.showHi=true;
  	this.weatherService.getWeather(no).subscribe(result => {
			this.city=result.name;
			console.log(result);
			this.temperature=result.main.temp;
			this.wind=result.wind.speed;
			this.humidity=result.main.humidity;
			this.visibility=result.weather[0].main;
			 
		});
  }
}
