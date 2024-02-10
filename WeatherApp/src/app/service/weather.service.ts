import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey ='0798e792b8msh60105b97dea771ap105154jsn35eb14fc223d';
  private apiUrl ='https://the-weather-api.p.rapidapi.com/api/weather';

  constructor(private http: HttpClient) { }

  searchWeatherByCity(city:string): Observable<any>{
    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", this.apiKey)
    .set("X-RapidAPI-Host", "the-weather-api.p.rapidapi.com");


    const options ={headers};
    return this.http.get('${this.apiUrl}/${city}, options');

  }
}
