import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
	export class WeatherService{
		constructor(private http:Http){
			console.log('Services Called');
		}
		getWeather(zipcode:number){
			return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip='
    + zipcode + ',in&appid=f0746531a203dfdb2d082852683668b2&units=imperial'
).map(res => res.json());
		}
	}
